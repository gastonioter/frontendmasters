import getJSON from "../utils/getJSON";

async function fetchBreedList({ queryKey }) {
  const [, animal] = queryKey;

  if (!animal) return [];

  return getJSON(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
}

export default fetchBreedList;
