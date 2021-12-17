// the **parameter** is a variable in function and the **arguments** are the actual  value of that parameter that get passed to function.
// the **return** is used for returnig values from function and the **console.log** used to make sure the function works its only for debugging/informative purposes.

// 1 function calculatCube
function calculateCube(num){
    return (num**3)
}
console.log(calculateCube(5))

// 2function `isAVowel` 
function isAVowel(letter){
    let vowels =(["a", "e", "i", "o", "u"]);
      for (let i=0; i<= vowels.length;i++){
        return true
    }
        return false
    }

console.log(isAVowel("o"));
