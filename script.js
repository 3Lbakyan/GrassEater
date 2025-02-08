let matrix = [];
let row = 100;
let col = 100;
let side = 10;
let garssArr = [];
let garssEaterArr = [];
let PredatorArr = [];
let WaterArr = [];

for (let y = 0; y < row; y++) {
    matrix[y] = [];
    for (let x = 0; x < col; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 70) {
            matrix[y][x] = 0;
        }
        else if (a >= 70 && a < 80) {
            matrix[y][x] = 1;
        }
        else if (a >= 80 && a < 90) {
            matrix[y][x] = 2;
        }
        else if (a >= 90 && a < 95) {
            matrix[y][x] = 3;
        }
        else if (a >= 95 && a < 100) {
            matrix[y][x] = 4;
        }
    }
}

function setup() {
    frameRate(120);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background(200);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let newGrass = new Grass(x, y);
                garssArr.push(newGrass);
            }
            else if (matrix[y][x] == 2) {
                let newGrassEater = new grassEater(x, y);
                garssEaterArr.push(newGrassEater);
            }
            else if (matrix[y][x] == 3) {
                let newPredator = new Predator(x, y);
                PredatorArr.push(newPredator);
            }
            else if (matrix[y][x] == 4) {
                let newWater = new Water(x, y);
                WaterArr.push(newWater);
            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill(200);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("cyan");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (let i = 0; i < garssArr.length; i++) {
        garssArr[i].mul();
    }
    for (let i = 0; i < garssEaterArr.length; i++) {
        garssEaterArr[i].eat();
    }
    for (let i = 0; i < PredatorArr.length; i++) {
        PredatorArr[i].eat();
    }
    for (let i = 0; i < WaterArr.length; i++) {
        WaterArr[i].eat();
    }
}








let morePredator = document.getElementById("more-Predator");
morePredator.addEventListener("click", morePredators);

function morePredators() {
    for (let i = 0; i < 100; i++) {
        let newPredator = new Predator(Math.floor(Math.random() * matrix[0].length), Math.floor(Math.random() * matrix.length));
        PredatorArr.push(newPredator);
    }
}


let moreWater = document.getElementById("more-Water");
moreWater.addEventListener("click", moreWaters);

function moreWaters() {
    for (let i = 0; i < 100; i++) {
        let newWater = new Water(Math.floor(Math.random() * matrix[0].length), Math.floor(Math.random() * matrix.length));
        WaterArr.push(newWater);
    }
}


let moreGrass = document.getElementById("more-Grass");
moreGrass.addEventListener("click", moregrasses);

function moregrasses() {
    for (let i = 0; i < 100; i++) {
        let newGrass = new Grass(Math.floor(Math.random() * matrix[0].length), Math.floor(Math.random() * matrix.length));
        garssArr.push(newGrass);
    }
}


let moreGrassEater = document.getElementById("more-GrassEater");
moreGrassEater.addEventListener("click", moreGrassEaters);

function moreGrassEaters() {
    for (let i = 0; i < 100; i++) {
        let newGrassEater = new grassEater(Math.floor(Math.random() * matrix[0].length), Math.floor(Math.random() * matrix.length));
        garssEaterArr.push(newGrassEater);
    }
}

















let noPredator = document.getElementById("no-Predator");
noPredator.addEventListener("click", noPredators);

function noPredators() {
    console.log('clicked');
    for(let i = 0; i< PredatorArr.length; i++){
        PredatorArr[i].die();
    }
}


let noWater = document.getElementById("no-Water");
noWater.addEventListener("click", noWaters);

function noWaters() {
    for(let i = 0; i<=WaterArr.length; i++){
        WaterArr[i].die();
    }
}

let noGrassEater = document.getElementById("no-GrassEater");
noGrassEater.addEventListener("click", noGrassEaters);

function noGrassEaters() {
    for(let i = 0; i<=garssEaterArr.length; i++){
        garssEaterArr[i].die();  
    }
}