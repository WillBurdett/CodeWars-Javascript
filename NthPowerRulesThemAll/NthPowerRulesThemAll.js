// You are provided with an array of positive integers and an additional integer n (n > 1).
// Calculate the sum of each value in the array to the nth power. 
// Then subtract the sum of the original array.

function modifiedSum(a, n) {
    return sum(a.map(e => Math.pow(e, n))) - sum(a)
  }
const sum = arr => {
    let total = 0;
    arr.forEach(e => total+= e);
    return total
}  

// should equal 30
console.log(modifiedSum([1, 2, 3], 3))