const container  = document.querySelector('.container');
const resetButton  = document.querySelector('.btn');
const containerHeight = container.offsetHeight;
const containerWidth = container.offsetWidth;

let gridSize = 37;

function createGrid (gridNumber, gridHeight, gridWidth) {
    for (let i = 0; i < gridNumber; i++) {
        const sketchGrid = document.createElement("div");
        sketchGrid.className = 'grid inactive';
        sketchGrid.style.height = gridHeight + 'px';
        sketchGrid.style.width = gridWidth + 'px';
        container.appendChild(sketchGrid);
    };

    document.querySelectorAll('.grid').forEach(grid => {
        //My original code here was slow because it added an event listener for every grid, the AI code below only adds one event listener.
        //grid.addEventListener("mouseenter", () => {
        //    grid.classList.remove('inactive');
        //    grid.classList.add('active');
        //});
        container.addEventListener("mouseover", (e) => {
            if (e.target.classList.contains('grid')) {
                e.target.classList.remove('inactive');
                e.target.classList.add('active');
            }
        });
    });
};

function calculateGridDims(gridSize) {
    gridNumber = gridSize * gridSize;
    gridHeight = containerHeight / gridSize
    gridWidth = containerWidth / gridSize
    createGrid(gridNumber, gridHeight, gridWidth);
}

resetButton.addEventListener("click", () => {
    let prompter = prompt("Please enter a new grid size");
    gridSize = prompter;
    resetGrid();
    calculateGridDims(gridSize);
});


function resetGrid () {
    document.querySelectorAll('.grid').forEach(grid => {
        grid.remove();
    });
};

window.addEventListener('load', () => {
    calculateGridDims(gridSize);
});

