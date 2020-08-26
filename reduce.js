let numbers = [1,5,4,3]


let total = numbers.reduce((acc,initial) => acc+initial)

console.log(total)

//retriving the object with the reduce method :)
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(usersObj)