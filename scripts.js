let numOfDiv;
const skchBox = document.querySelector('#skchPad');
const resetBtn = document.querySelector('.btn')


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
                row.style.backgroundColor = 'black';
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
    numOfDiv = Number(prompt('How many cells should there be in lines and columns from 0 to 400?'));
    console.log(numOfDiv);
    console.log(typeof(numOfDiv));
    return numOfDiv;
}

function checkNewGrid () {
    if (numOfDiv < 0 || numOfDiv > 400);
    numOfDiv = Number(prompt('It was suppose to be number between 0 to 400! Pick new one.'));
    
    return numOfDiv;
}

function drawNewGrid() {

getNewGrid();
checkNewGrid();
}

document.addEventListener('load', crGrid(16));
resetBtn.onclick = drawNewGrid;    


