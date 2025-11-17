// $("h1").css("color","red");
$("h1").html("Hi");
$(document).keydown(function(event){
    $("h1").html(event.key);
});
$("h1").on("mouseover",function(){
    $("h1").addClass("timer");
    setTimeout(function(){$("h1").removeClass("timer")},500);
});

$(".b1").on("click", function(){
    $("h1").hide();
});
$(".b2").on("click", function(){
    $("h1").show();
});
$(".b3").on("click", function(){
    $("h1").toggle();
});
$(".b4").on("click", function(){
    $("h1").slideUp();
});
$(".b5").on("click", function(){
    $("h1").slideDown();
});
$(".b6").on("click", function(){
    $("h1").slideToggle();
});
$(".b7").on("click", function(){
    $("h1").animate({opacity:0.5});
});