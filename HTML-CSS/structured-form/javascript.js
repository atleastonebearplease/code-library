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

document.addEventListener(
    "DOMContentLoaded",
    ()=> {
        document
        .getElementById("billing-checkbox")
        .addEventListener("change", toggleBilling);
    },
    false
);

function toggleBilling() {
    const billingItems = document.querySelectorAll('#billing input[type="text"');

    for(const item of billingItems) {
        item.disabled = !item.disabled;
    }
}
