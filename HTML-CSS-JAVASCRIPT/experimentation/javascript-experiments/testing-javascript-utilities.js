const displayList = document.querySelector('display-list')

function output(string){
    let li = document.createElement('li');

    li.innerText = string;

    displayList.appendChild(li);
}

function logRaw(object) {
    console.log(object);
}