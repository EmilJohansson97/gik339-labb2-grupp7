
const checkbox = document.getElementById("divStyle");
const inputs = document.getElementsByClassName("textfield");

const button = document.getElementById("button");
const description = document.getElementById("description");

function getInput(e){
    console.log(e.target.name)

    if (e.target.name === "content"){
    description.textContent = e.target.value;
} 
}

for (let input of inputs) {
    input.addEventListener("input", getInput);
}



checkbox.addEventListener("change", function () {
    let color = null;
    for (let field of inputs) {
        if (field.name === "color"){
            color = field;
            break
        }
    }
     
    description.style.backgroundColor = color.value;
});

button.addEventListener("click", function () {
  description.remove();
});

