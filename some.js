//If anyone of the array elements satisfies the condition, then 
    //the output will be True otherwise it will be false(Boolean value)
function checkPositive(arr){
    return arr.some(number => number > 5);
}

console.log(checkPositive([3,2,3,-3]));  //it returns false. 

