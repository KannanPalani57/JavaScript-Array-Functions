
//if every element in an array passes the condition, then the output 
        //will be true otherwise, it ends with false.  (every array method)

function checkPositive(arr){
    return arr.every(number => number > 0);
}

console.log(checkPositive([3,2,3,-3]));  //it returns false. 
               //Because, The all elements in an array not satisfies the condition