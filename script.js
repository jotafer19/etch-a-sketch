const container = document.querySelector("#container");
const newGridButton = document.querySelector("#new-grid");

function makeGrid(dimension) {
    container.style.setProperty("--grid-columns", dimension);
    container.style.setProperty('--grid-rows', dimension);
    for (let i = 0; i < (dimension ** 2); i++) {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        container.appendChild(newCell);
    }
}

makeGrid(60);

const myCells = document.querySelectorAll(".cell");
myCells.forEach((cell) => {
    cell.addEventListener("mouseover", changeBackgroundColor)
})

function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}