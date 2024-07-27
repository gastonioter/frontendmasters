


function filter(predicateFn, array) {
  // base case
  if (length(array) == 0) return [];

  // recursive case
  const firstItem = head(array);

  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];

  return concat(filteredFirst, filter(predicateFn, tail(array)));
}

function map(predicateFn, array) {
  if (length(array) == 0) return [];

  const firstItem = head(array);

  const transformed = [predicateFn(firstItem)];

  return concat(transformed, map(predicateFn, tail(array)));
}

function reduce(predicateFn, array, initialValue) {
  if (length(array) === 0) return initialValue;

  const current = head(array);
  const newInitialValue = predicateFn(initialValue, current);

  return reduce(predicateFn, tail(array), newInitialValue);
}


function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

function tail(array) {
  return array.slice(1);
}
