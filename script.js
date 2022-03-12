const gridContainer = document.querySelector(".grid__container");
let height = gridContainer.clientHeight;
console.log(height);
let size = 50;
const rowHeight = height / size;
const columnWidth = rowHeight;
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

