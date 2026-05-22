var level=0;
var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["green","red","yellow","blue"];
 var gameStarted=false;

if(!gameStarted){
   $(document).one("keydown",function (){
      nextSequence();
      gameStarted=true;
   });
}


$(".btn").click(function(){
   var userChosenColor=$(this).attr("id");
   // console.log(userChosenColor);
   userClickedPattern.push(userChosenColor);
   // console.log(userClickedPattern);
   playSound(userChosenColor);
   animatePress(userChosenColor);
   checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
   if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
      console.log("Success");
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }
      console.log(userClickedPattern);
      console.log(gamePattern);

   }else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function nextSequence(){
      userClickedPattern=[];
      level++;
      $("#level-title").text("Level "+level);
      var randomNumber=Math.floor(Math.random()*4);
      var randomChosenColor=buttonColors[randomNumber];
      gamePattern.push(randomChosenColor);
      playSound(randomChosenColor);
      animatePress(randomChosenColor);
      
}

// $("#"+randomChosenColor)



function playSound(name){
   $("#"+name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   new Audio("./sounds/"+name+".mp3").play();
}
function animatePress(currentColor){
   $(currentColor).addClass("pressed");
   setTimeout(function(){
      $(currentColor).removeClass("pressed")
   },100);

}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


