let arr = new Array();
let count = 0;
for(let i = 1; i<=100; i++){
    if(i%11==0){
        arr[count] = i;
        count++;
    }
}
console.log(arr);
