// TODO: write `findAll(..)`

function findAll(input, array) {
  const matcheRules = [
    function exactMatch(v1, v2) {
      return Object.is(v1, v2);
    },

    function emptiness(v1, v2) {
      if (v1 == null && v2 == null) {
        return true;
      }
    },

    function booleanMatchingRule(v1, v2) {
      if (typeof v1 == "boolean" || typeof v2 == "boolean") {
        return v1 === v2;
      }
    },

    function objectMatchingRule(v1, v2) {
      if (typeof v1 == "object" || typeof v2 == "object") {
        return v1 === v2;
      }
    },

    function stringMatchinRule(v1, v2) {
      if (typeof v1 == "string" && v1.trim().length > 0) {
        if (typeof v2 == "number" && !isNaN(v1) && !Object.is(v2, -0)) {
          return v1 == v2;
        }
      }
    },

    function numberMatchingRule(v1, v2) {
      if (
        typeof v1 == "number" &&
        v1 != Infinity &&
        v1 != -Infinity &&
        !Number.isNaN(v1) &&
        !Object.is(v1, -0)
      ) {
        if (typeof v2 == "string" && v2 != "") {
          return v1 == Number(v2);
        }
      }
    },
  ];

  return array.filter((value) =>
    matcheRules.some((rule) => rule(value, input))
  );
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];


console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
