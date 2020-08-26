//Sorting of numbers

var arr = [5,4,3,2,1]

var sortedArr = arr.sort((a,b) => a - b)

console.log(sortedArr)


//UnMutating array

var globalArr = [5,9,3];

function UnMutatingArray(arr){
    return [].concat(arr).sort((a,b) => a - b);
}
console.log(globalArr)
console.log(UnMutatingArray(globalArr))
console.log(globalArr)