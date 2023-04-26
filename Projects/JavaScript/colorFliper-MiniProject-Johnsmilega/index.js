const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "teal", "#6495ED", "darkorange", "rgb(255, 192, 203)", "goldenrod", "navy", "salmon", "black"];

let btn = document.querySelector('#generatingColorBtn');
let backgroundDiv = document.querySelector('.screenWrapper');
let colorCode = document.querySelector('.colorCode')

btn.addEventListener('click', () => {
    let randomColorGenerated=colors[Math.floor(Math.random()*colors.length)];
    colorCode.textContent=backgroundDiv.style.backgroundColor=randomColorGenerated;
});
