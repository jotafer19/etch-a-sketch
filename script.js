const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");

// button.addEventListener("click", () => {
//     makeRows(newGrid());
// })

function newGrid() {
    let gridDimension = 0;
    while (gridDimension <= 0 || gridDimension > 100) {
        gridDimension = prompt("Select a new grid dimension (max 100).", 0);
    }
    makeRows(gridDimension);
}

function makeRows(rowNumber) {
    for (let i = 0; i < rowNumber; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row")
        for (let j = 0; j < rowNumber; j++) {
            let newColumn = document.createElement("div");
            newColumn.classList.add("cell")
            newRow.appendChild(newColumn);
        }
        container.appendChild(newRow);
    }
}

makeRows(16)

function hoverCell(event) {
    this.style.backgroundColor = "black";
}

const cellsGrid = document.querySelectorAll(".cell");
cellsGrid.forEach((cellGrid) => {
    cellGrid.addEventListener("mouseover", hoverCell);
})

const gridButton = document.querySelector("#new-grid");
gridButton.addEventListener("click", newGrid)