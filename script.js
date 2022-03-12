const gridContainer = document.querySelector(".grid__container");
const body = document.querySelector("html");
console.log(body);
let height = gridContainer.clientHeight;
console.log(height);
let size = 50;
const rowHeight = height / size;
const columnWidth = rowHeight;
let selectedColor = "black"
console.log(rowHeight);
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

gridContainer.addEventListener("mouseover", (e) => changeColor(e));
/*
items.forEach(item => {
    item.addEventListener("mousedown", function(e){
        e.target.style.backgroundColor = "blue";
        items.forEach(item => { item.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "blue";
        })})
    })
})*/

function changeColor(e){
    if(e.buttons === 1){
        console.log(e);
        e.target.style.backgroundColor = selectedColor;
    }
    else{
        return;
    }
}






