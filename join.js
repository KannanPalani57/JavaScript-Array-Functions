//join method used convert the array to string.

function sentensify(str) {
    // Only change code below this line
      var arr = str.split(/\W/)
      console.log(arr)
      arr = arr.join(" ")
      console.log(arr)
      return arr;
  
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");
  