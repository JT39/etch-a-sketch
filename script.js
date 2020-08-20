const container = document.querySelector('.container');
const allDivs = document.querySelectorAll('.container > div');
const randomColor = document.getElementById("randomColor");

makeGrid(16);

function makeGrid(grid) {

    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;

    for (let i = 0; i < grid * grid; i++) {
        let div = document.createElement('div');
        container.appendChild(div)
    }

    let children = container.children;
    let childrenArray = Array.from(children);

    for (let i = 0; i < childrenArray.length; i++) {
        let item = childrenArray[i];
        item.classList.add('box');
    }

    childrenArray.forEach(div => div.addEventListener('mouseover', color));
}

function newGrid() {
    let ask = +prompt("Enter number:", 16);
    container.innerHTML = '';
    if (ask > 0) {
    grid = ask;
    makeGrid(grid);
    } else return;
}

function newColor(e) {
    this.classList.add('newColor');
    let alpha = 1;
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    this.setAttribute(`style`, `background-color: rgba(${r},${g},${b},${alpha})`);
}

function color(e) {
    e.target.classList.add('color');
}

randomColor.onclick = function() {
    let allDivs = document.querySelectorAll('.container > div');
    allDivs.forEach(div => div.addEventListener('mouseover', newColor));
};

function reset() {
    let allDivs = document.querySelectorAll('.container > div');
    let totalDivs = Math.sqrt(allDivs.length);
    for (let i = 0; i < allDivs.length; i++) {
        let item = allDivs[i];
        container.removeChild(item);
    }
    makeGrid(totalDivs);
}