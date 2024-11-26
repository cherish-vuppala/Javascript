// Primitive Types:
// Number: 42, 3.14
// String: "Hello", 'World'
// Boolean: true, false
// Undefined: A variable declared but not assigned.
// Null: Intentional absence of value.
// BigInt: For integers larger than 2^53 - 1.
// Symbol: Unique identifiers.
let age = 1;
console.log(typeof age);

num = 1.1;
console.log(typeof num);

let isEligible = true;
console.log(typeof isEligible);

let obj = null;
console.log(typeof obj);

// Explanation:
// obj2 is implicitly declared as a global variable (not recommended) and assigned the value 23.
// typeof obj2 checks its type, which is "number".

obj2 = 23;
console.log(obj2);
console.log(typeof obj2);

// ECMA it's a standard for js
// use 'strict' , it tells the runtime that we are using new version of javascript
