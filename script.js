const gridContainer = document.querySelector(".grid__container");
const body = document.querySelector("html");
const slider = document.querySelector(".size__slider");
const sizeText = document.querySelector(".size__paragraph");
const colour = document.querySelector(`input[type="color"]`);
const colourMode = document.querySelector("#btn1");
const blackMode = document.querySelector("#btn2");
const rainbowMode = document.querySelector("#btn3");
const eraserMode = document.querySelector("#btn4");
const clear = document.querySelector("#btn5");

colour.value = "#000000";
slider.value = 16;

sizeText.textContent = `${slider.value} X ${slider.value}`;
let rainbow = false;
let selectedColor = colour.value;
window.addEventListener('load', () => generateGrid())

gridContainer.addEventListener("mouseover", (e) => changeColor(e));
slider.addEventListener("input", function(e) {
    sizeText.textContent = `${slider.value} X ${slider.value}`;
    size = slider.value;
    generateGrid();
})


colourMode.addEventListener("click", () => {
    selectedColor = colour.value;
    rainbow = false;
});

colour.addEventListener("input", () => {
    selectedColor = colour.value
    rainbow = false;
});

blackMode.addEventListener("click", () => {
    selectedColor = "black"
    rainbow = false;
});

eraserMode.addEventListener("click", () => {
    selectedColor = "white";
    rainbow = false;
});

clear.addEventListener("click", () => {
    rainbow = false;
    generateGrid();
})


rainbowMode.addEventListener("click", () => rainbow = true);

function changeColor(e){
    if(e.buttons > 0){
        if(rainbow){
            e.target.style.backgroundColor = randomColour();
            return;
        }
        e.target.style.backgroundColor = selectedColor;
    }
    else{
        return;
    }
}

function generateGrid(){
    gridContainer.textContent = "";
    let size = slider.value;
    let rowHeight = gridContainer.clientHeight / size;
    let columnWidth = rowHeight;
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        
        row.classList.add("grid__row")
        {
            for(let i = 0; i < size; i++){
                const divInner = document.createElement('div');
                divInner.style.width = `${columnWidth}px`
                divInner.classList.add("grid__element")
                row.appendChild(divInner);
            }
        }
        row.style.minHeight = `${rowHeight}px`;
        gridContainer.appendChild(row);
    }
}
function randomColour(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}






