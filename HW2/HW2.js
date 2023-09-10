// Таблица уможения от 1 до 9 в структурной парадигме

let num = 1;

while(num) {

    num = prompt("Input a number", "");

    if(num >=1 & num <= 9) {
        let count = 1;
        
        while (count < num) {
            for(let i = 1; i <= 9; i++) {
                console.log(`${i}*${count} = ${i*count}`)
            }
            count++;
        }
    } else {
        num = false;
    }
}

alert("stop");
