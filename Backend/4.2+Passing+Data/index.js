import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var name="";
var sur="";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")});

app.post("/submit", (req, res) => {
    name=req.body["fName"]
    sur=req.body["lName"]
    const letters=req.body["fName"].length+req.body["lName"].length
    res.render("index.ejs",{
      numOfLetters:letters
    })
    console.log(letters);
    })
   


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
