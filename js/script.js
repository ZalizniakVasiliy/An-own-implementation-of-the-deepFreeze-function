"use strict";

let user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

// console.log(user);

function deepFreeze(someObj) {
  const propertyNames = Object.getOwnPropertyNames(someObj);

  propertyNames.forEach((propertyName) => {
    const propertyValue = someObj[propertyName];

    if (typeof propertyValue === `object`) deepFreeze(propertyValue);
  });

  return Object.freeze(someObj);
}

// user.data.d.b1 = 55; //overwrite existing property `b1: 55`
// console.log(user);

// user.data.d.d1.d2 = `new value`; //create new property `d2: "new value"`
// console.log(user);

// delete user.data;
// console.log(user); //delete property `data: {...}`

// delete user.data.d.d1;
// console.log(user); //delete property `d1: {a2: 3, b2: 3, c2: 3},`

console.log(Object.isFrozen(user)); //false
console.log(Object.isFrozen(user.data)); //false
console.log(Object.isFrozen(user.data.d)); //false
console.log(Object.isFrozen(user.data.d.d1)); //false

console.log(deepFreeze(user));

console.log(Object.isFrozen(user)); //true
console.log(Object.isFrozen(user.data)); //true
console.log(Object.isFrozen(user.data.d)); //true
console.log(Object.isFrozen(user.data.d.d1)); //true

// user.data.d.b1 = 55; //Cannot assign to read only property 'b1' of object '#<Object>'
// console.log(user);

// user.data.d.d1.d2 = `new value`; //Cannot add property d2, object is not extensible
// console.log(user);

// delete user.data;
// console.log(user); //Cannot delete property 'data' of #<Object>

// delete user.data.d.d1;
// console.log(user); //Cannot delete property 'd1' of #<Object>
