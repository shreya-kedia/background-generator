var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var random=document.querySelector(".random");

function setGradient()
{
	body.style.background="linear-gradient(to right,"
	+ color1.value
	+", "
	+ color2.value
	+")";
	css.textContent=body.style.background + ";";
}
function randomColorGen()
{
  const randomColor=Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}
function randomBg()
{
  var rcolor1= "#"+randomColorGen();
  var rcolor2="#"+randomColorGen();
  body.style.background="linear-gradient(to right,"
	+ rcolor1
	+", "
	+ rcolor2
	+")";
	css.textContent=body.style.background + ";";



}
document.addEventListener("DOMContentLoaded",setGradient);
//window.onload=setGradient;


color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
random.addEventListener("click",randomBg);


