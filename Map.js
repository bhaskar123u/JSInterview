const users = [
  { fname: "Bhaskar", lname: "Sharan", age: 30 },
  { fname: "Kumud", lname: "Raj", age: 27 },
  { fname: "Ankita", lname: "Anand", age: 29 },
  { fname: "Rishi", lname: "Singh", age: 22 },
  { fname: "Ritu", lname: "Singh", age: 27 }
];

// map
const firstNames = users.map(user => user.fname);
console.log(firstNames);

// polyfill for map
Array.prototype.myMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
}

console.log(users.myMap(
  (item) => item.fname
));