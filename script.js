const container = document.getElementById('container');

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
        container.appendChild(gridItem);
    }
}

function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
}

function changeGridSize() {
    const size = document.getElementById('grid-size').value;
    if (size < 2 || size > 100) {
        alert('Please enter a size between 2 and 100.');
        return;
    }
    container.innerHTML = '';
    createGrid(size);
}

// Initialize the grid with a default size
createGrid(16);