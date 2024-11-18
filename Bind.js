const obj1 = {
  fname: "Bhaskar Sharan"
}

const obj2 = {
  fname: "Kumud Raj"
}

function printAge(age, birthyear) {
  console.log(`${this.fname} is ${age} years old and ${birthyear} born`);
}

let newPrintAge = printAge.bind(obj1);
newPrintAge(25);

// polyfill for bind
Function.prototype.myBind = function (obj = {}, ...args) {
  console.log(this);
  console.log(args);
  if (typeof this !== "function")
    throw new Error("not callable");

  obj.fn = this;
  return function (...args1) { 
    obj.fn(...args, ...args1);
  }
}

let newMyBindPrintAge = printAge.myBind(obj2, 28);
newMyBindPrintAge(1996);