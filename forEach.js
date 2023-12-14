console.log("ForEach JS file is included")

//Callback Function
function getFullName(firstName, lastName, callbackFn){
    let fullName =  firstName + " " + lastName;

    callbackFn(fullName)
}

let fullNameOfTheUser = getFullName("John", "Doe", (fullName)=> { })



// Iterating array elements without ForEach


// for( var i =0; i < names.length; i++){
//     // console.log(names[i])
// }





const names = ["Mathan", "Deena",, "Sundar", "Arun"]


// callbackFn - element, index, array

// forEach (callbackFn, thisArg)

let iterations = 0;


names.forEach((element, index, array) => {

    iterations = iterations + 1;
    // console.log("Element is ",element, "And the index is", index, )
})

console.log(iterations)

// things to consider when using forEach


// forEach - synchronous


const numbers = [1,5,2,3]

let sum = 0;

let addNumber = async (number1, number2) => {
    return number1 + number2
}


// numbers.forEach(async element => 
//     {
//         sum = await addNumber(element, sum)

//     })


(async () => {
    for(let number of numbers){
        sum =    await addNumber(number, sum)    
      }

      console.log("Total of numbers in array",sum)
    })()








