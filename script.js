var _ = require('lodash');
var arr = [1,2,3,4,5,6];
concole.log('answer',_.without(arr,4));

var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var css = document.querySelector("h3")


function setGradient(){
	console.log(color2.value)
	body.style.background = "linear-gradient(to right, " 
						+ color1.value 
						+ ", " 
						+ color2.value 
						+ ")";

	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
