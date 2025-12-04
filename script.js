
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

for (let input of inputs){
input.addEventListener("input", getInput);
}
//inputs[1].addEventListener("input", getInput);



checkbox.addEventListener("change", function () {
    let color = null;
    const field = inputs[0] 
   
    color = field;
  
    description.style.backgroundColor = color.value;
});

button.addEventListener("click", function () {
  description.remove();
});

