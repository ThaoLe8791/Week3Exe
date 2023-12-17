function isPalindrome(arr){
    // let arr=word.split();
    console.log(arr);
    let flag=true;
    for (let i=0; i<arr.length/2; i++){
        if (arr[i] != arr[arr.length-i-1]){
            
            return false;
        }
    }
    return true;
}

// console.log(isPalindrome('noon'));
console.log(isPalindrome('hello'));