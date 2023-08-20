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

makeGrid(16);

let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", changeBackgroundColor)
})

function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}

function updateGrid(cells) {
    cells.forEach(cell => {
        container.removeChild(cell);
    })
    let newDimension = prompt("Select a new dimension", 16);
    while (newDimension <= 0 || newDimension > 100 ) {
        newDimension = prompt("Accepted values between 1 and 100", 16);
    }
    return newDimension;
    
}

newGridButton.addEventListener("click", () => {
    let newDimension = updateGrid(cells);
    makeGrid(newDimension);
    cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", changeBackgroundColor)
    })
})