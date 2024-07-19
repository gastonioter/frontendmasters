export default async function getJSON(url) {
  var resApi = await fetch(url);

  if (!resApi.ok) {
    throw new Error(`error fetching at ${url}`);
  }

  return resApi.json();
}
