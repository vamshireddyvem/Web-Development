import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");

// Middleware to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// In-memory array to store blog posts
let blogPosts = [
  { id: 1, title: "First Blog Post", content: "This is my very first blog post!" }
];

// 1. Home Page - Lists all blog post links dynamically
app.get("/", (req, res) => {
  res.render("index", { posts: blogPosts });
});

// 2. Render Create Form Page
app.get("/create", (req, res) => {
  res.render("create");
});

// 3. Handle Form Submission - Add post to array
app.post("/submit-post", (req, res) => {
  const newPost = {
    id: Date.now(), // Generate a unique ID using current timestamp
    title: req.body.title,
    content: req.body.content
  };
  
  blogPosts.push(newPost);
  res.redirect("/"); // Redirect back to homepage
});

app.get("/cancel", (req, res) => {
  res.redirect("/"); // Redirect back to homepage
});

// 4. Single Post View Page
app.get("/post/:id", (req, res) => {
  const postId = Number(req.params.id);
  const foundPost = blogPosts.find(post => post.id === postId);

  if (!foundPost) {
    return res.status(404).send("Post not found");
  }

  res.render("post", { post: foundPost });
});

//5.render edit form
app.get("/edit/:id",(req,res)=>{
    const postId = Number(req.params.id);
    const foundPost = blogPosts.find(post => post.id === postId);

  if (!foundPost) {
    return res.status(404).send("Post not found");
  }

  res.render("edit", { post: foundPost });
});


// 6. Handle Edit Form Submit (NEW)
app.post("/update-post/:id", (req, res) => {
  const postId = Number(req.params.id);
  const postIndex = blogPosts.findIndex(post => post.id === postId);

  if (postIndex !== -1) {
    // Update the post values in the array
    blogPosts[postIndex].title = req.body.title;
    blogPosts[postIndex].content = req.body.content;
  }

  res.redirect("/");
});


// 7. Delete Post
app.post("/delete-post/:id", (req, res) => {
  const postId = Number(req.params.id);
  
  // Keep all posts except the one matching the ID
  blogPosts = blogPosts.filter(post => post.id !== postId);
  
  res.redirect("/"); // Redirect back to homepage
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});