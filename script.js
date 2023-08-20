const DEFAULT_DIMENSION = 16;

let cells;
let cellColor;
let colorDegradation = 0;

function makeGrid(dimension) {
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    for (let i = 0; i < (dimension ** 2); i++) {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        container.appendChild(newCell);
    }
    cells = document.querySelectorAll(".cell");
}

function fillColor() {
    colorSelector.value = "#000000";
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if (cellColor === "rainbow") {
                cell.style.backgroundColor = randomColor();
            } else if (cellColor === "grey") {
                cell.style.backgroundColor = greyScale();
            } else {
                cell.style.backgroundColor = colorSelector.value;
            }
        })
    })
}

function randomColor() {
    let redColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

function greyScale() {
    let actualColor = `rgba(0, 0, 0, ${colorDegradation})`;
    colorDegradation += 0.1;
    return actualColor;
}

function updateGrid() {
    cellColor = "solid";
    colorSelector.value = "#000000";
    cells.forEach(cell => {
        container.removeChild(cell);
    })
    let newDimension = prompt("Select a new dimension", 16);
    while (newDimension <= 0 || newDimension > 100 ) {
        newDimension = prompt("Accepted values between 1 and 100", 16);
    }
    return newDimension;
    
}

function resetGrid() {
    cellColor = "solid";
    colorSelector.value = "#000000";
    cells.forEach(cell => {
        container.removeChild(cell);
    })
    makeGrid(DEFAULT_DIMENSION);
}

const container = document.querySelector("#container");
const newGridButton = document.querySelector("#new-grid");
const solidButton = document.querySelector("#solid-color");
const colorSelector = document.querySelector("#color-selector");
const rainbowButton = document.querySelector("#rainbow-color");
const greyScaleButton = document.querySelector("#grey-scale");
const resetButton = document.querySelector("#reset-button")

newGridButton.addEventListener("click", () => {
    let newDimension = updateGrid();
    makeGrid(newDimension);
    fillColor();
})

solidButton.addEventListener("click", () => {
    cellColor = "solid";
    fillColor;
})
    
rainbowButton.addEventListener("click", () => {
    cellColor = "rainbow";
    fillColor;
})

greyScaleButton.addEventListener("click", () => {
    colorDegradation = 0;
    cellColor = "grey";
    fillColor;
})

resetButton.addEventListener("click", () => {
    resetGrid();
    fillColor();
})

window.onload = () => {
    makeGrid(DEFAULT_DIMENSION);
    fillColor();
}