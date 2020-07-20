let numOfDiv;
const skchBox = document.querySelector('#skchPad');
const resetBtn = document.querySelector('.btn')
const colorBtn = document.querySelector('.btnRnd')
let randomColor = 'black'



function crGrid(numOfDiv) {
    
    let divwidth = skchBox.clientHeight / numOfDiv;
    let divheight = skchBox.clientWidth / numOfDiv;
    
    for (let i = 0; i < numOfDiv; i++) {
        const column = document.createElement('div');
        column.className = 'column';
               
        for (let n = 0; n < numOfDiv; n++) {
            const row = document.createElement('div');
            row.className ='cell';
            row.style.width = divwidth + 'px';
            row.style.height = divheight + 'px';
    
            row.addEventListener('mouseover', turnGray);  
            row.addEventListener('mouseleave', turnBlank);
            row.addEventListener('click', turnBlack);
            
            function turnGray(){
                row.style.backgroundColor = 'gray';
            }
            function turnBlack(){
                row.style.backgroundColor = randomColor;
                row.removeEventListener('mouseover', turnGray);
                row.removeEventListener('mouseleave', turnBlank);
            }
            function turnBlank(){
            row.style.backgroundColor = skchBox.style.backgroundColor;
            }

            column.appendChild(row);
        }
    
        skchBox.appendChild(column);
    } 
}

function getNewGrid () {
    numOfDiv = Number(prompt('How many cells should there be in lines and columns from 0 to 120?'));
    
    return numOfDiv;
}

function checkNewGrid () {
        if (numOfDiv<0 || numOfDiv > 120 || typeof numOfDiv !== "number"){
            while (numOfDiv<0 || numOfDiv > 120 || typeof numOfDiv !== "number"){
                numOfDiv = Number(prompt('It was suppose to be a number between 0 and 120. Pick one!'));
            }
        
            return numOfDiv;    
        }
}

function resetGrid() {
    skchBox.innerHTML = '';
    return;
}

function drawNewGrid() {
    randomColor = 'black'
    getNewGrid();
    checkNewGrid();
    resetGrid();
    crGrid(numOfDiv);
}

function newRandomColor () {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
randomColor = `rgb(${r},${g},${b})`;
}

function newDrawRndCol() {

    getNewGrid();
    checkNewGrid();
    newRandomColor();
    resetGrid();
    crGrid(numOfDiv);
}

document.addEventListener('load', crGrid(16));
resetBtn.onclick = drawNewGrid;    
colorBtn.onclick = newDrawRndCol;  



