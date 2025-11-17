var gamePattern=[];
var buttonColors=["Green","Red","Yellow","Blue"];
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    return randomChosenColor;
}
let color=nextSequence();
gamePattern.push(color);
console.log(gamePattern);
$("#green").on("click",function(){
   $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   new Audio("./sounds/green.mp3").play();
    var userChosenColor=$("")
});
$("#red").on("click",function(){
   $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   new Audio("./sounds/red.mp3").play();
});
$("#yellow").on("click",function(){
   $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   new Audio("./sounds/yellow.mp3").play();
});
$("#blue").on("click",function(){
   $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   new Audio("./sounds/blue.mp3").play();
});
