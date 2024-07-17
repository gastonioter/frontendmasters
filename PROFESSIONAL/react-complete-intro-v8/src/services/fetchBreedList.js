async function fetchBreedList({ queryKey }) {
  const [, animal] = queryKey;

  if (!animal) return [];

  var resApi = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!resApi.ok) {
    throw new Error(`breed list fetch not ok`);
  }

  return resApi.json();
}

export default fetchBreedList;
