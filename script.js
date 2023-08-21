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
    colorDegradation += 0.01;
    return actualColor;
}

function resetGrid() {
    cellColor = "solid";
    colorSelector.value = "#000000";
    slider.value = "16";
    sliderLabel.textContent = `${slider.value} x ${slider.value}`;
    cells.forEach(cell => {
        container.removeChild(cell);
    })
    makeGrid(DEFAULT_DIMENSION);
}

function updateGrid() {
    colorDegradation = 0;
    let newDimension = slider.value;
    cells.forEach(cell => {
        container.removeChild(cell);
    })
    makeGrid(newDimension);
}

const container = document.querySelector("#container");
const solidButton = document.querySelector("#solid-color");
const colorSelector = document.querySelector("#color-selector");
const rainbowButton = document.querySelector("#rainbow-color");
const greyScaleButton = document.querySelector("#grey-scale");
const resetButton = document.querySelector("#reset-button");
const slider = document.querySelector("#dimension-slider");
const sliderLabel = document.querySelector("#slider-label");

solidButton.addEventListener("click", () => {
    cellColor = "solid";
})
    
rainbowButton.addEventListener("click", () => {
    cellColor = "rainbow";
})

greyScaleButton.addEventListener("click", () => {
    colorDegradation = 0;
    cellColor = "grey";
})

resetButton.addEventListener("click", () => {
    resetGrid();
    fillColor();
})

slider.addEventListener("change", () => {
    updateGrid();
    fillColor();
})

slider.addEventListener("mousemove", (e) => {
    sliderLabel.textContent = `${e.target.value} x ${e.target.value}`
})

window.onload = () => {
    makeGrid(DEFAULT_DIMENSION);
    fillColor();
    slider.value = "16";
    colorSelector.value = "#000000";
}


