const arr = [1, 2, 3, 4, 5];
arr.forEach(item => console.log(item));
console.log("----")
// polyfill for forEach
Array.prototype.myForEach = function (callback) {
  // console.log(this);
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}
arr.myForEach((x) => {
  console.log(x);
});