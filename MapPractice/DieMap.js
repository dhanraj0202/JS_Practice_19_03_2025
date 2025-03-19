let rolls = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

let maxCount = 0;
let maxNumber = null;
let minCount = Infinity;
let minNumber = null;

while(true){
    let die = Math.floor(Math.random() * 6) + 1;
    rolls[die]++;

    if(rolls[die] === 10){
        break;
    }
}

for(let num in rolls){
    if (rolls[num] > maxCount) {
        maxCount = rolls[num];
        maxNumber = num;
    }
    if(rolls[num] < minCount){
        minCount = rolls[num];
        minNumber = num;
    }
}

console.log("Roll counts:", rolls);
console.log("Number that reached maximum times:", maxNumber, "with", maxCount, "rolls");
console.log("Number that reached minimum times:", minNumber, "with", minCount, "rolls");
