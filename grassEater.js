class grassEater{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            ];
    }

    chooseCell(charachter) {
        let cells = [];
        this.getNewCoordinates();
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == charachter) {
                    cells.push(this.directions[i])
                }
            }
        }
        return cells;
    }

    move(){
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells);
        if (newCell){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
        if(this.energy <= 0){
            this.die();
        }
    }

    die(){
        matrix[this.y][this.x] = 0;

        for(let i = 0; garssEaterArr.length; i++){
            if(garssEaterArr[i].x == this.x && garssEaterArr[i].y == this.y){
                garssEaterArr.splice(i, 1);
                break;
            }
        }
    }

    eat(){
        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells);

        if(newCell){
            this.energy++;
            let newX = newCell[0];
            let newY = newCell[1];
             
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            for(let i = 0; garssArr.length; i++){
                if(garssArr[i].x == this.x && garssArr[i].y == this.y){
                    garssArr.splice(i, 1);
                    break;
                }
            }
            if(this.energy >= 50){
                this.mul();
            }
        }
        else{
            this.move();
        }
    }

        mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells);

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 2;
            let grassEat = new grassEater(newX, newY);
            garssEaterArr.push(grassEat);
            this.energy = 10;
        }
    }

}