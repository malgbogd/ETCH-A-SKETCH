let numOfDiv = 16;
let newDivRow;
let newDicCol;
let skchBox;

function addDivRow() {
    for (let index = 0; index < numOfDiv; index++) {
        newDivRow = document.createElement('div');
        newDivRow.classList.add('skchDivR');
        skchBox = document.querySelector('#skchPad');
        skchBox.insertBefore('newDivRow');
    }
}

function addDivCol() {
    for (let index = 0; index < numOfDiv; index++) {
        newDivRow = Array.from(document.querySelectorAll('.skchDivR'));
        newDivCol = document.createElement('div');
        newDivRow.classList.add('skchDivR');
        
        newDivRow.array.forEach(newDivRow => {
        newDivRow.insertBefore('newDivCol');    
        });
    }
    }

    document.addEventListener('load', function create(e){
        addDivRow();
        addDivCol();
        }
    );