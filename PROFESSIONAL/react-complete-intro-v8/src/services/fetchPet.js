async function fetchPet({ queryKey }) {
  const [, id] = queryKey;

  const resApi = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!resApi.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return resApi.json();
}

export default fetchPet;
