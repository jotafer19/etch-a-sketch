const container = document.querySelector("#container");
const newGridButton = document.querySelector("#new-grid");
const rainbowButton = document.querySelector("#rainbow-color");
const greyScaleButton = document.querySelector("#grey-scale");
let dif = 0;

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
let cellColor = "black";
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

rainbowButton.addEventListener("click", () => {
    cellColor = "rainbow";
})

greyScaleButton.addEventListener("click", () => {
    cellColor = "grey";
    dif = 0;
})

function randomColor() {
    let redColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

function greyScale() {
    let actualColor = `rgba(0, 0, 0, ${dif})`;
    dif += 0.1;
    return actualColor;
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
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = randomColor(); 
        })
    })
})