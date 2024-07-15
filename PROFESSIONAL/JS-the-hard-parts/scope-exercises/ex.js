// CHALLENGE 1

function createFunction() {
  return function () {
    console.log("hello");
  };
}

const function1 = createFunction();
function1(); // => should console.log('hello');

// CHALLENGE 2
/* Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.  */
function createFunctionPrinter(input) {
  // var input = 'example'
  function toReturn() {
    console.log(input);
  }
  return toReturn; // function definition + closure
}

const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  return function (num) {
    return x + num;
  };
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5
const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  var output = null;

  return oncefy;

  function oncefy(num) {
    var canRun = output == null;

    if (canRun) {
      output = func(num);
      return output;
    }
    return output;
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(3)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let callsCounter = 0;

  return function () {
    callsCounter++;
    if (callsCounter == count) {
      return func();
    }
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed

// CHALLENGE 6
function delay(func, wait, ...rest) {
  return function () {
    setTimeout(() => {
      func(...rest);
    }, wait);
  };
}

const addByTwoDelayed = delay(addByTwo, 2000, 7);

console.log(addByTwoDelayed());

// CHALLENGE 7
function rollCall(names) {
  return function iterator() {
    const element = names.shift();
    return element ? element : "Everyone accounted for";
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
console.log(rollCaller()); // => should log 'Victoria'
console.log(rollCaller()); // => should log 'Juan'
console.log(rollCaller()); // => should log 'Ruth'
console.log(rollCaller());
// => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const results = {};

  return saver;

  function saver(value) {
    if (typeof value == "string" && value == magicWord) {
      return results;
    }

    return registerEntry(value);
  }

  function registerEntry(value) {
    const output = func(value);
    results[value] = output;
    return output;
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }
console.log(multBy2AndLog(5)); // => should log 18
console.log(multBy2AndLog("boo"));
// CHALLENGE 9
function cycleIterator(array) {
  var iterator = 0;
  var lastIndex = array.length - 1;

  return cycle;

  function cycle() {
    if (iterator > lastIndex) {
      iterator = 0;
    }

    var element = array[iterator];

    iterator++;

    return element;
  }
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
console.log(getDay());
console.log(getDay());
// CHALLENGE 10
/* Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function. */
function defineFirstArg(func, arg) {
  var firstArg = arg;

  function freezeFirstArg(num) {
    return func(firstArg, num);
  }

  return freezeFirstArg;
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
/* Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects. */
function dateStamp(func) {}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const rules = [];

  return changer;

  function changer(str1, str2) {
    if (str1 && str2) {
      addEntry(str1, str2);
      return;
    }

    return createString(str1);
  }

  function createString(str1) {
    return rules.reduce(applyRule, str1);
  }

  function applyRule(string, [replace, toMatch]) {
    return string.replace(toMatch, replace);
  }

  function addEntry(replace, toMatch) {
    rules.push([replace, toMatch]);
  }
  //   if (second != null) {
  //     obj[first] = second;
  //     return;
  //   }

  //   for (let key in obj) {
  //     first = first.replace(key, obj[key]);
  //   }

  //   return first;
  // };
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
changeScene("blue", "brown");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs."));
// => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
/* There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret */
function createSecretHolder(secret) {
  var secretProp = secret;

  function getSecret() {
    return secretProp;
  }

  function setSecret(value) {
    secretProp = value;
  }

  var objWithSecret = {
    getSecret,
    setSecret,
  };

  return objWithSecret;
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14
/* Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called. */
function callTimes() {
  var callsCounter = 0;

  return function () {
    return ++callsCounter;
  };
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2

/* Create a function roulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'spin' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'. */
// CHALLENGE 15
function roulette(num) {
  if (isNaN(num)) return;

  var callsCounter = 0;

  return function () {
    callsCounter++;
    if (callsCounter < num) {
      return "spin";
    } else if (num == callsCounter) {
      return "win";
    } else {
      return "pick a number to play again";
    }
  };
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
/* Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0. */
function average() {
  var nums = [];

  function accInputs(num) {
    var isValidNumber = !Number.isNaN(parseFloat(num));

    if (!num && !nums.length) return 0;

    if (isValidNumber) {
      nums.push(num);
    }

    return nums.reduce(calculateAverage, 0) / nums.length;
  }

  function calculateAverage(acc, curr) {
    return acc + curr;
  }

  return accInputs;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
/* Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false. */
function makeFuncTester(arrOfTests) {
  return testCallback;

  function testCallback(cb) {
    var allTestPass = arrOfTests.every(function passTest(test) {
      var [input, output] = test;
      return cb(input) === output;
    });

    return allTestPass;
  }
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
