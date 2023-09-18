class Game {
    // Конструктор класса Game
    constructor() {
        this.field = new Map();
        this.counter = 0;
        this.items = [".item1", ".item2", ".item3", ".item4", ".item5", ".item6", ".item7", ".item8", ".item9"];
        this.cross = document.querySelector(".left").cloneNode(true);
        this.circle = document.querySelector(".right").cloneNode(true);
        this.wins = ['.item1 .item2 .item3', '.item4 .item5 .item6', '.item7 .item8 .item9',
                    '.item1 .item4 .item7', '.item2 .item5 .item8', '.item3 .item6 .item9',
                    '.item1 .item5 .item9', '.item3 .item5 .item7',];
        this.linePos = '';
        this.winLines = new Map();
        this.gameOver = false;
        this.message = "";
        this.circleWins = 0;
        this.crossWins = 0;
        this.drows = 0;
    }
    // Метод, который добавляет в Dom-дерево ноду Х или О, и меняет очередь хода
    addFigure(item) {
        if(this.counter%2 == 0) {
            const left = this.cross.cloneNode(true);
            left.classList.add('CN');
            document.querySelector(item).append(left);
            this.field.set(item, 1);
            document.querySelector(".messages").textContent = "Ходит: О"
        } else {
            const right = this.circle.cloneNode(true);
            right.classList.add('CN');
            document.querySelector(item).append(right);
            this.field.set(item, 2);
            document.querySelector(".messages").textContent = "Ходит: X"
        }
        this.counter++;
    }
    // Шаг игры, или же ход
    step(item) {
        if(!this.field.has(item) && !this.gameOver) {
            this.addFigure(item);
            this.message = this.checkWin();
            this.showMessage();
        }
    }
    // Начало игры, точка входа в игру
    startGame() {
        for(const item of this.items) {
            document.querySelector(item).addEventListener("click", ()=>this.step(item));
        }
        let i = 0;
        for(const line of document.querySelectorAll('.none')) {
            this.winLines.set(this.wins[i], line);
            i++;
        }
        this.newGame();
    }
    // Каждый ход проверяет кто победилл 
    checkWin() {
        for(const win of this.wins) {
            const keys = win.split(" ");
            let value1;
            let value2;
            let value3;
            this.field.has(keys[0]) ? value1 = this.field.get(keys[0]) : value1 = 0;
            this.field.has(keys[1]) ? value2 = this.field.get(keys[1]) : value2 = 0;
            this.field.has(keys[2]) ? value3 = this.field.get(keys[2]) : value3 = 0;
            if(value1*value2*value3 === 1 && this.field.size >= 5) {
                this.gameOver = true;
                this.crossWins++;
                this.drawLine(win);
                document.querySelector(".winsCross>span").textContent = this.crossWins;
                return 1;
            } else if (value1*value2*value3 === 8 && this.field.size >= 5) {
                this.gameOver = true;
                this.circleWins++;
                this.drawLine(win);
                document.querySelector(".winsCircle>span").textContent = this.circleWins;
                return 2;
            } else if (this.field.size === 9 && win ==='.item3 .item5 .item7'){
                this.gameOver = true;
                this.drows++;
                document.querySelector(".drawCircle>span").textContent = this.drows;
                document.querySelector(".drawCross>span").textContent = this.drows;
                return 0;
            }
        }
    }
    // Зачеркивает победную тройку
    drawLine(key) {
        this.winLines.get(key).classList.remove("none");
        this.linePos = this.winLines.get(key);
    }
    // Выводит сообщение о победе
    showMessage() {
        if(this.message === 1) {
            document.querySelector(".messages").textContent = "X - winer!!!";
        } else if(this.message === 2) {
            document.querySelector(".messages").textContent = "O - winner!!!";
        } else if(this.message === 0) {
            document.querySelector(".messages").textContent = "Draw!!!";
        }
    }
    // Сбрасывает счетчики и удаляет все добавленные ноды
    newGame() {
        document.querySelector(".btn").addEventListener("click", ()=>{
            const elems = document.querySelectorAll(".CN");
            for(const elem of elems) {
                elem.remove();
            }
            this.counter = 0;
            this.field.clear();
            this.gameOver = false;
            this.linePos?.classList?.add("none");
            this.linnePos = "";
            document.querySelector(".messages").textContent = "Ходит: Х";
        })
    }
}

let game = new Game();
game.startGame();
