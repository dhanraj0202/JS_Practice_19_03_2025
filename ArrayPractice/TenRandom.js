let arr = new Array(10);
for(let i = 0; i < arr.length; i++){
    arr[i] = Math.floor(Math.random()*10);
}
let max = 0;
let max2 = 0;


arr.forEach(a => {
    console.log(a);
    
    if(a>max){
        max2 = max;
        max = a;
    }
    else if(a>max2 && a!==max){
        max2 = a;
    }
});

let min = max;
let min2 = min;
arr.forEach(a => {
    
    if(a<min){
        min2 = min;
        min = a;
    }
    else if(a<min2 && a!==min){
        min2 = a;
    }
});

console.log("Second largest:",max2);
console.log("Second smallest:",min2);