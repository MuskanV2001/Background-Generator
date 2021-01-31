var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");


// console.log(css);
// console.log(color1);
// console.log(color2);

// console.log(body);



// body.style.background ="red";		//accesses the style element of the body tag ie background and then changes it to red





//changes the background style of body to linear gradient of color1 value and color2 value
function backgroundChanger(){
	body.style.background = "linear-gradient(to right,"  + color1.value +   ", "   + color2.value +  ") "  ;	

	css.textContent = body.style.background + ";" ;			//displays the color info in the text form on the web pg
}



//function to change the background color using any random color values
function randomBgColor(){
	color1.value=randomColor();
	color2.value=randomColor();
	backgroundChanger();
}



//function to generate random color values in hexadecimal format
function randomColor(){
	var hexcolor =  Math.random().toString(16);
	hexcolor = "#" +  hexcolor.slice(2,8);
	return hexcolor;
}


// displays initial background color info on first page-load
backgroundChanger();




color1.addEventListener("input",backgroundChanger);			//'input' is the event here to which the color1 var has to respond by invokng the backgroundChanger function
	// console.log(color1.value);					//function gives the value(hexadecimal val) of the color1 that is set, on changing the color from the color picker box icon


color2.addEventListener("input", backgroundChanger);		//'input' is the event here to which the color2 var has to respond by invokng the backgroundChanger function
		// console.log(color2.value);					//function gives the value(hexadecimal val) of the color2 that is set, on changing the color from the color picker box icon
	

	
//to display random colored background on clicking the button
button.addEventListener("click",randomBgColor);