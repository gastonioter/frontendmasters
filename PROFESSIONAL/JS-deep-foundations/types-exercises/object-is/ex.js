// TODO: define polyfill for `Object.is(..)`

Object.is = function is(v1, v2) {
  if (typeof v1 == "number" && typeof v2 == "number") {
    if (Number.isNaN(v1) && Number.isNaN(v2)) return true;
    return v1 == v2;
  }

  if (typeof v1 == "string" && typeof v2 == "string") {
    return v1 == v2;
  }

  if (typeof v1 == "boolean" || typeof v2 == "boolean") {
    return v1 === v2;
  }

  if (typeof v1 == "undefined" || typeof v2 == "undefined") {
    return v1 === v2;
  }
 
};

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is("0", ""));

console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
