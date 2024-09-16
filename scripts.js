const gridContainer = document.getElementById('grid-container');
const clearButton = document.getElementById('clear');
const resizeButton = document.getElementById('resize');

let currentSize = 16;

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(cell);
    }
}

function changeColor(e) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}

function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

function resizeGrid() {
    let newSize = prompt("Enter new grid size (max 100):");
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        currentSize = newSize;
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

clearButton.addEventListener('click', clearGrid);
resizeButton.addEventListener('click', resizeGrid);

// Initial grid creation
createGrid(currentSize);