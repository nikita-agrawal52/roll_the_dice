var randomNumber=Math.floor((Math.random())*6)+1;
var randomDiceImage1="dice"+randomNumber+".png";
var randomImageSource="images/"+randomDiceImage1;
document.getElementsByClassName("img1")[0].setAttribute("src",randomImageSource);

var randomNumber2=Math.floor((Math.random())*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;
document.getElementsByClassName("img2")[0].setAttribute("src",randomImageSource2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
   
}
