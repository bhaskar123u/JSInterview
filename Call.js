const obj1 = {
  fname: "Bhaskar Sharan"
}

const obj2 = {
  fname: "Kumud Raj"
}

function printAge(age) {
  console.log(`${this.fname} is ${age} years old`);
}

printAge.call(obj1, 25);
printAge.call(obj2, 24);

// polyfill for call
Function.prototype.myCall = function (obj = {}, ...args) {
  console.log(this);
  console.log(args);
  if (typeof this !== "function")
    throw new Error("not callable");
  obj.fn = this;
  obj.fn(...args);
}

printAge.myCall(obj1, 29);