// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callback(item));
  }

  return newArray;
}
//console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  array.forEach((element) => {
    callback(element);
  });
}

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(callback(element));
  });

  return newArray;
}

// Challenge 6
function reduce(array, callback, initialValue) {
  function reducer(acc, curr) {
    return callback(acc, curr);
  }

  return array.reduce(reducer, initialValue);
}

//const nums = [4, 1, 3];
//const add = function(a, b) { return a + b; }
//console.log(reduce(nums, add, 0))

// Challenge 7
function intersectionOne(arrays) {
  const resultArray = [];

  const [first, ...rest] = arrays;

  for (let value of first) {
    if (rest.every((array) => array.some((el) => el == value))) {
      resultArray.push(value);
    }
  }

  return resultArray;
}

function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return acc.filter((el) => curr.includes(el));
  });
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);

// Challenge 8

function union(arrays) {
  const withoutRepetitions = new Set(arrays.flat(Infinity));
  return [...withoutRepetitions];
}

console.log(
  union([
    [5, 10, 15],
    [15, [88, 1], 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
/* Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.  */

function objOfMatches(array1, array2, callback) {
  if (array1.length != array2.length) return;

  const obj = {};
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] == callback(array1[i])) {
      obj[array1[i]] = array2[i];
    }
  }

  return obj;
}

//console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
/* Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. */
function multiMap(arrVals, arrCallbacks) {
  if (arrVals.length != arrCallbacks.length) return;

  return arrCallbacks.reduce((obj, callback, index) => {
    return {
      ...obj,
      [arrVals[index]]: callback(arrVals[index]),
    };
  }, {});
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);

// Challenge 11
function objectFilter(obj, callback) {
  const newObj = {};

  for (let key in obj) {
    if (callback(key) == obj[key]) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};

console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  const isMajority = Math.floor(array.length / 2);

  const matches = array.filter((el) => callback(el));

  return matches.length > isMajority;
}

// /*** Uncomment these to check your work! ***/
const isOdd2 = function (num) {
  return num % 2 === 1;
};
//console.log(majority([1, 2, 3, 4, 5], isOdd2)); // should log: true
//console.log(majority([2, 3, 4, 5], isOdd2)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const falsies = [];
  const truthies = array.filter((value) => {
    if (!callback(value)) {
      falsies.push(value);
    }
    return callback(value);
  });

  return [...truthies, ...falsies];
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
//console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  function reducer(obj, value) {
    return {
      ...obj,
      [callback(value)]: (obj[callback(value)] || 0) + 1,
    };
  }
  return array.reduce(reducer, {});
}

// /*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  return array.reduce((obj, value) => {
    console.log(obj);
    return {
      ...obj,
      [callback(value)]: obj[callback(value)]
        ? [...obj[callback(value)], value]
        : [value],
    };
  }, {});
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  return Object.keys(obj).filter((key) => callback(obj[key]));
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  return func2(func1(value)) === func1(func2(value));
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  return Object.entries(obj).filter(([key, value]) => callback(key) == value);
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  const trueCount = arrOfFuncs
    .map((fn) => fn(value))
    .filter((val) => Boolean(val)).length;

  return (trueCount / arrOfFuncs.length) * 100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, curr) => curr(acc), value);
}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  if (!subject) return;

  const reducedFunctions = Object.entries(objOfFuncs).reduce(
    (accObj, [key, fun]) =>
      fun(subject) > accObj.max ? { max: fun(subject), fnKey: key } : accObj,
    { max: -Infinity, keyFn: null }
  );

  return reducedFunctions.fnKey;
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce((acc, curr) => {
    return curr(acc);
  }, startVal);
}

function add100(num) {
  return num + 100;
}

function addTen(num) {
  return num + 10;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
