import express from "express";

const app=express();
const port=3000;

const today=new Date();
const day=today.getDay();

let type="";
let adv="Its time to Work Hard";

// if(day===0|| day===6){
//     type="it's the Weekend";
//     adv="have some fun!";
// }
switch(day){
    case 1:type= "a Monday"
    break;
    case 2:type= "Tuesday"
    break;
    case 3: type= "a Wednesday"
    break;
    case 4:type= "Thursday"
    break;
    case 5:type= "Friday"
    break;
    case 6:type= "Saturday"
    break;
    case 0:type= "Sunday"
    break;
    
}
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    })
})

app.listen(port,()=>{
    console.log(`Server is up and running @ port${port}`);
    console.log(day);
})