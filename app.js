
// 1 Verbal questions


// *1 the **parameter** is a variable in function and the **arguments** are the actual  value of that parameter that get passed to function.
// *2  the **return** is used for returnig values from function and the **console.log** used to make sure the function works its only for debugging/informative purposes.
// *3  After calling a function or when function completes its task it gives you back a valuecalled returns.



// 1 function calculatCube
function calculateCube(num){
    return (num**3)
}
// console.log(calculateCube(5))


// 2function `isAVowel` 
function isAVowel(letter){
    let vowels =(["a", "e", "i", "o", "u"]);
      for (let i=0; i<= vowels.length;i++){
          if (letter== vowels[i]){
        return true
    }
}
return false
}

// console.log(isAVowel("o"));



// 4 function Get Two Lengths
function getTwoLengths(word1,word2){
    let lengthOne= word1.length
    let lengthTwo= word2.length
    newArray=[ lengthOne, lengthTwo]
    return(newArray) 
}
// console.log(getTwoLengths("Hank","hippopopalous"))



// 5 function Sum Array
function sumArray(arr){
    let sum = 0
    for (let i=0; i< arr.length; i++){
        sum+=arr[i]
    }
   return sum
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]));


//6 function Prime Numbers
function checkPrime(num){
    for (let i=2; i<=Math.sqrt(num) ; i++){
        if (num% i=== 0){
    return false;
}
    }
    return true;
}
// console.log(checkPrime(7)); 
 function printPrimes(num){
     for (let i =2; i< num; i++){
        if(checkPrime(i)){
            console.log(`${i}`);
        }
     }
 }
//  console.log(printPrimes(17))


//  7 function print Longest Word
function printLongestWord(array){
    let longestWord ="";
    for( let i= 0; i< array.length; i++){
        if (array[i].length > longestWord.length)
        longestWord = array[i];
    }
    return longestWord;

}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
