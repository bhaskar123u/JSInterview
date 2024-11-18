const obj1 = {
  a: 1,
  b: 2,
  c: {
    z: 3
  }
};

const obj2 = {
  a: 1,
  b: 2,
  c: {
    z: 3
  }
};

const obj3 = {
  b: 2,
  a: 1,
  c: {
    z: 3
  }
};

// console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
// console.log(JSON.stringify(obj1) == JSON.stringify(obj3));

function compareObjects(obj1, obj2) {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);

  if (keysArr1.length !== keysArr2.length)
    return false;

  for (let key of keysArr1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (!isObjects && value1 !== value2) {
      return false;
    }

    if (isObjects && !compareObjects(value1, value2)) {
      return false;
    }
  }
  return true;
}

const isObject = (object) => {
  return object != null && typeof object === "object";
}

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));