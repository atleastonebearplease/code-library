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

/*
    Write more permanent functions above, testing stuff below
*/

//understanding for..in vs. for..of

const randomData = "3 354 8787.5 687351.8 3512 8735";
const regexpFourDigits = /\b(?<![\d.])\d+(?!\.\d)\b/g;

addToOutputList(randomData.match(regexpFourDigits));



function dragStartHandler(e) {
	e.dataTransfer.items.add(e.target.innerText, "task-id");
}

let dragList = document.querySelectorAll(".draggable");

for(const child of dragList) {
	child.addEventListener("dragstart", dragStartHandler);
}


const target = document.querySelector(".dropzone");

target.addEventListener("dragover", (e) => {
	e.preventDefault();
});

target.addEventListener("drop", (e) => {
	e.preventDefault();
	const data = e.dataTransfer.getData("task-id");
	e.target.innerText = "";
	e.target.append(data);
});