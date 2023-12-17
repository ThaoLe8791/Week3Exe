function luckyNumbers(n){
    let arr=[];
    for (let i=0; i<n; i++){
       let pot =  Math.floor(Math.random() * 10)
       while (arr.includes(pot)){
            pot =  Math.floor(Math.random() * 10)
       }
       arr.push(pot)

    }
    return arr
}

console.log(luckyNumbers(9));