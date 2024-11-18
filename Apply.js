const obj1 = {
  fname: "Bhaskar Sharan"
}

const obj2 = {
  fname: "Kumud Raj"
}

function printAge(age) {
  console.log(`${this.fname} is ${age} years old`);
}

printAge.apply(obj1, [25]);
printAge.apply(obj2, [24]);

// polyfill for apply
Function.prototype.myApply = function (obj = {}, ...args) {
  console.log(this);
  console.log(args);
  if (typeof this !== "function")
    throw new Error("not callable");
  // 2nd argument must be an array
  if (!Array.isArray(...args)) {
    throw new Error("CreateListFromArrayLike called on non - object")
  }
  obj.fn = this;
  obj.fn(...args);
}

printAge.myApply(obj1, [29]);