let months = new Map();

for(let i = 1; i<=12; i++){
    months[i] = [];
}


for(let i = 1; i<=50; i++){
    let month = Math.floor(Math.random()*12)+1;
    months[month].push("Person "+i);
}


for(let month in months){
    if(months[month].length > 0){
        console.log("Month " + month + ":", months[month]);
    }
}