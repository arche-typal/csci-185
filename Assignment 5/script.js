function changeFont() {
	let font = document.getElementById("p-font").style.fontFamily
	if (font === '' || font.includes("Times New Roman")) {	
		document.getElementById("p-font").style.fontFamily = 'Arial';
	} else {
		document.getElementById("p-font").style.fontFamily = 'Times New Roman';
	}
}

function changeColor() {
	let color = document.getElementById("p-font").style.color
	if (color === '' || color.includes("black")) {	
		document.getElementById("p-font").style.color = 'red';
	} else {
		document.getElementById("p-font").style.color = 'black';
	}
}

function hideText() {
	document.getElementById("p-font").style.display = 'none';
}
function displayText() {
	document.getElementById("p-font").style.display = 'block';
}

function hideOrDisplay() {
	let display = document.getElementById("p-font").style.display
	if (display === 'none') {	
		document.getElementById("p-font").style.display = 'block';
	} else {
		document.getElementById("p-font").style.display = 'none';
	}
}

function upsideDown() {
	let beetlejuice = document.getElementById("beetlejuice").style.transform
	if (beetlejuice === '' || document.getElementById("beetlejuice").style.transform === 'rotate(0deg)') {	
		document.getElementById("beetlejuice").style.transform = 'rotate(180deg)';
	} else {
		document.getElementById("beetlejuice").style.transform = 'rotate(0deg)';
	}
}

function timeNow(){
	let now = new Date();
	let currentTime = now.toLocaleTimeString();
	document.getElementById("time-div").innerHTML = currentTime;
}

function mathCalc(){
	let x = 2 + 2;
	document.getElementById("math-div").innerHTML = x;
}