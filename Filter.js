const users = [
  { fname: "Bhaskar", lname: "Sharan", age: 30 },
  { fname: "Kumud", lname: "Raj", age: 27 },
  { fname: "Ankita", lname: "Anand", age: 29 },
  { fname: "Rishi", lname: "Singh", age: 22 },
  { fname: "Ritu", lname: "Singh", age: 27 }
];

// filter
console.log(users.filter((item) => item.age < 30));
// polyfill for filter
Array.prototype.myFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]))
      newArray.push(this[i]);
  }
  return newArray;
}

console.log(users.myFilter((item) => item.age < 30));