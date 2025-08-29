let body = document.querySelector('body');
let output = document.querySelector('.output');
let outputList = document.querySelector('#output-list');

const BLOCK = '============='


function setOutput(string){
	output.innerText = string;
}

function addToOutputList(string){
	let li = document.createElement('li');
	li.innerText = string;
	outputList.appendChild(li);
}

function newVisualBlock(){
	addToOutputList(BLOCK);
}

for(let i = 0; i < 5; i++)
{
	let trailer = document.createElement('div');
	trailer.className = 'trail';
	body.appendChild(trailer);
}

let index = 0;
let trailers = document.querySelectorAll(".trail");


function updateTrailers(event){
	trailers[index].style.left = (event.clientX + 5) + "px";
	trailers[index].style.top = (event.clientY + 5) + "px";

	index++;

	if(index === trailers.length) index = 0;
}

document.addEventListener('mousemove', updateTrailers);

/*
    Write more permanent functions above, testing stuff below
*/

//understanding for..in vs. for..of

const randomData = "3 354 8787.5 687351.8 3512 8735";
const regexpFourDigits = /\b(?<![\d.])\d+(?!\.\d)\b/g;

addToOutputList(randomData.match(regexpFourDigits));

