let gridContainer = document.querySelector(".grid__container");
const body = document.querySelector("html");
const slider = document.querySelector(".size__slider");
const sizeText = document.querySelector(".size__paragraph");
slider.value = 16;

sizeText.textContent = `${slider.value} X ${slider.value}`;
let height = gridContainer.clientHeight;


let selectedColor = "black"
generateGrid();

gridContainer.addEventListener("mouseover", (e) => changeColor(e));
slider.addEventListener("input", function(e) {
    sizeText.textContent = `${slider.value} X ${slider.value}`;
    size = slider.value;
    generateGrid();
})

function changeColor(e){
    if(e.buttons > 0){
        e.target.style.backgroundColor = selectedColor;
    }
    else{
        return;
    }
}

function generateGrid(){
    gridContainer.textContent = "";
    let size = slider.value;
    let rowHeight = height / size;
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






