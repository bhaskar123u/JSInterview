const arr = [1, 2, 3, [4, 5, [6]], 7, [8, 9, [10, [11, [12, [13, 14, 15]]]]]]

// depth of level 1 by default
console.log(arr.flat());
// depth of level 4 will flat upto level 4
console.log(arr.flat(4));


// polyfill for flat
Array.prototype.myFlatten = function (depth) {
  if (depth == null)
    depth = 1;
  const result = [];
  this.forEach(element => {
    if (Array.isArray(element) && depth > 0) {
      element.myFlatten(depth - 1).forEach(item => result.push(item));
      // above can be written as result.push(...element.myFlatten(depth - 1));
    } else {
      result.push(element);
    }
  });

  return result;
}

console.log(arr.myFlatten(3));