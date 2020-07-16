let numOfDiv = 16;

function crGrid(numOfDiv) {

    const skchBox = document.querySelector('#skchPad');

    for (let i = 0; i < numOfDiv; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        console.log(i);
               
        for (let n = 0; n < numOfDiv; n++) {
            const column = document.createElement('div');
            column.className ='column';
            row.appendChild(column);
            console.log(n);
        }
    
        skchBox.appendChild(row);
    } 
}
document.onload(crGrid(numOfDiv));