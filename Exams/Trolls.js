'use strict';

let arr = [
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]
const EmptyCell = 10;
let getPosition = [];
let dimension = arr[0].split(' ').map(Number);
let rows = dimension[0];
let columns = dimension[1];
let field = new Array(rows);
let Wboup = -1;
let Nbslbub = -2;
let Lsjtujzbo = -3;

function solve(args) {

    field.fill(0);

    // Create Grid
    for (let i = 0; i < columns; i += 1) {
        field[i] = new Array(columns);
        field[i].fill(EmptyCell);
    }

    // Coordinates

    let coords = args[1].split(';');


    for (let i = 0; i < coords.length; i += 1) {
        let pairs = coords[i].split(' ').map(Number);
        if (i === 0) {
            field[pairs[0]][pairs[1]] = Wboup;
            getPosition.push(new positions(Wboup, pairs[0], pairs[1]));
        }
        if (i === 1) {
            field[pairs[0]][pairs[1]] = Nbslbub;
            getPosition.push(new positions(Nbslbub, pairs[0], pairs[1]));
        }
        if (i === 2) {
            field[pairs[0]][pairs[1]] = Lsjtujzbo;
            getPosition.push(new positions(Lsjtujzbo, pairs[0], pairs[1]));
        }

    }

    console.log(getPosition);

    // Commands

    for (let i = 2; i < args.length; i += 1) {
        let command = args[i].split(' ');
        if (command[0] === 'mv') {
            let name = command[1],
                move = command[2];
            if (name === 'Wboup') {
                name = Wboup;
            } else if (name === 'Nbslbub') {
                name = Nbslbub;
            } else if (name === 'Lsjtujzbo') {
                name = Lsjtujzbo;
            }
            Moves(name, move);
        } else if (command[0] === 'lay') {
            layTrap();
        }
    }


}

function positions(name, row, col) {
    this.names = name;
    this.row = row;
    this.col = col;
}

function Moves(name, dir) {
    let dropCol = 0,
        dropRow = 0;
    if (dir === 'u') {
        dropRow = -1;
    }
    if (dir === 'd') {
        dropRow = 1;
    }
    if (dir === 'l') {
        dropCol = -1;
    }
    if (dir === 'r') {
        dropCol = 1;
    }

    let index = Math.abs(name) - 1;
    let currentName = getPosition[index];
    let currentCol = currentName.col,
        currentRow = currentName.row;
    // Make Empty current cell
    field[currentRow][currentCol] = EmptyCell;
    let templateCol = currentCol + dropCol;
    let templateRow = currentRow + dropRow;
    if (templateRow > rows - 1 || templateRow < 0) {
        templateRow = currentRow;
    }
    if (templateCol > columns - 1 || templateCol < 0) {
        templateCol = currentCol;
    }
    if (currentName.names === Wboup || currentName.names === Nbslbub) {
        if (field[templateRow][templateCol] === Lsjtujzbo) {
            console.log(`The trolls caught Lsjtujzbo at ${templateRow} ${templateCol}`);
        }
    }
    if (field[templateRow][templateCol] !== EmptyCell) {
        templateCol = currentCol;
        templateRow = currentRow;
    }
    currentName.row = templateRow;
    currentName.col = templateCol;
    field[templateRow][templateCol] = currentName.names;

}

function layTrap() {

}
solve(arr);