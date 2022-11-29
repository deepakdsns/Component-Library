var submitbtn=document.querySelector("#submitbtn");
var bg=document.querySelector(".bg");
var num=255;

submitbtn.addEventListener("click",colorchange);
function colorchange()
{
    bg.style.backgroundColor=`rgb(${num},${num},${num})`;
    console.log("Hello",Math.random());
}
function random(num)
{
    num=Math.random()*10;
}