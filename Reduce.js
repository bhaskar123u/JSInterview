const users = [
  { fname: "Bhaskar", lname: "Sharan", age: 30 },
  { fname: "Kumud", lname: "Raj", age: 27 },
  { fname: "Ankita", lname: "Anand", age: 29 },
  { fname: "Rishi", lname: "Singh", age: 22 },
  { fname: "Ritu", lname: "Singh", age: 27 }
];

// reduce
const groupedUsers = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  }
  else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(groupedUsers);

// polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {

  let result = initialValue ? initialValue : {};
  for (let i = 0; i < this.length; i++) {
    callback(this[i], result);
  }
  return result;
}

console.log(users.myReduce((item, result) => {
  if (result[item.age]) {
    result[item.age]++;
  } else {
    result[item.age] = 1;
  }
}, {}));