import getJSON from "../utils/getJSON";

async function fetchPet({ queryKey }) {
  console.log(queryKey);

  const [, id] = queryKey;

  return getJSON(`https://pets-v2.dev-apis.com/pets?id=${id}`);
}

export default fetchPet;
