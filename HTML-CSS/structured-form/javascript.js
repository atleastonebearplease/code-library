const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", ()=> {
    output.textContent = price.value;
})

const colorPicker = document.querySelector("#color");

colorPicker.addEventListener("input", ()=>{
    document.body.style.backgroundColor = colorPicker.value;
})
