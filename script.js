const DEFAULT_DIMENSION = 16;

let cells;
let cellColor;
let colorDegradation = 0;

function makeGrid(dimension) {
    container.style.setProperty("--grid-columns", dimension);
    container.style.setProperty('--grid-rows', dimension);
    for (let i = 0; i < (dimension ** 2); i++) {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        container.appendChild(newCell);
    }
    cells = document.querySelectorAll(".cell");
}

function fillColor() {
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if (cellColor === "rainbow") {
                cell.style.backgroundColor = randomColor();
            } else if (cellColor === "grey") {
                cell.style.backgroundColor = greyScale();
            } else {
                cell.style.backgroundColor = "black";
            }
        })
    })
}

function randomColor() {
    let redColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    console.log(randomColor);
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

function greyScale() {
    let actualColor = `rgba(0, 0, 0, ${colorDegradation})`;
    colorDegradation += 0.1;
    console.log(colorDegradation);
    return actualColor;
}

function updateGrid() {
    cellColor = "black";
    colorDegradation = 0;
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
    cellColor = "black";
    cells.forEach(cell => {
        container.removeChild(cell);
    })
    makeGrid(DEFAULT_DIMENSION);
}

const container = document.querySelector("#container");
const newGridButton = document.querySelector("#new-grid");
const blackButton = document.querySelector("#black-color");
const rainbowButton = document.querySelector("#rainbow-color");
const greyScaleButton = document.querySelector("#grey-scale");
const resetButton = document.querySelector("#reset-button")

newGridButton.addEventListener("click", () => {
    let newDimension = updateGrid();
    makeGrid(newDimension);
    fillColor();
})

blackButton.addEventListener("click", () => {
    cellColor = "black";
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