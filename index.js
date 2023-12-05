var num1=Math.floor(Math.random()*6)+1;

var random_img_src1="images/dice"+num1+".png"

document.querySelectorAll("img")[0].setAttribute("src",random_img_src1);

var num2=Math.floor(Math.random()*6)+1;

var random_img_src2="images/dice"+num2+".png"

document.querySelectorAll("img")[1].setAttribute("src",random_img_src2);


if(num1>num2){
    document.querySelector("h1").innerHTML="Player-1 Won"
}else if(num1<num2){
    document.querySelector("h1").innerHTML="Player-2 Won"
}else{
    document.querySelector("h1").innerHTML="Game Drew.Play Again!"
}