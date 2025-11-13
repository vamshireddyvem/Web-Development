// var tweet= prompt("write your Tweet here!");
// var utweet=tweet.slice(0,140);
// console.log(utweet.length);
// alert("you have enterened  "+ utweet.length+ "  you have remaining  "+ (140-utweet.length));

// console.log(tweet);
// console.log(utweet);
var name= prompt("Please Enter your Name Below");
var fLName=name.slice(0,1);
var fLName2=fLName.toUpperCase();
var rLName=name.slice(1,name.length);
var rLName2=rLName.toLowerCase();
name= fLName2+rLName2;
alert("Hello ! "+name);
// console.log(name);
console.log(fLName);
console.log(fLName2);
console.log(rLName);
console.log(rLName2);