import getJSON from "../utils/getJSON";

export default function fetchPets({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  if (!location) return [];

  console.log(location, animal, breed);

  return getJSON(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
}
