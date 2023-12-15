// const fruitsInventory = { apple: 6, berry: 12, cherry: 8, dragonfruit: 4 };

// function double(obj){
//   for (const prop in obj){
//     obj[prop] *=2;
//   }
//   return obj;
// }

// double(fruitsInventory);
// console.log(fruitsInventory);
// const userProfile = {
//     password:'123',
//      email: 'test@google.com',
//      pwHash: 'V-9n5bQyu81z0',
//      location: 'Denver, CO'
//   }
// function removePassword(obj){
//   delete obj.password;
//   return obj;
// }

// removePassword(userProfile);
// console.log(userProfile)

// function copyArray(arr) {
//   // REPLACE THIS WITH YOUR CODE
//   const newarr = [...arr]
//   newarr.push('copy');
//   return newarr;

// }
// array1=[6,7,8];

// copyArray(array1);
// console.log(copyArray(array1));

// function copyObject(obj) {
//   // REPLACE THIS WITH YOUR CODE
//   const newObj = {...obj}
//   newObj['copy']= true;

//   return newObj;
// }

// const fruits = { 'apple': 6, 'berry': 12, 'cherry': 8 };
// console.log(copyObject(fruits))


const myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true,
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true,
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true,
    },
  ],
};
// Do not edit the code above.

/*
  Above is some information about my car. As you can see, I am not the best driver.
  I have caused a few accidents.
  Please update this driving record so that I can feel better about my driving skills.
    1. Write a function called recordCleaner.
    2. Loop over the accidents array (which is a property of the myCar object).
    3. For each accident, change atFaultForAccident from true to false.
*/
function recordCleaner(obj){
  for (const acci of obj['accidents']){
    for (const atf in acci){
      acci['atFaultForAccident']=false;
    }
  }
  return obj;
}

console.log(recordCleaner(myCar));