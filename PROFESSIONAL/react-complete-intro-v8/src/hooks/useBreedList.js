import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../services/fetchBreedList";

function useBreedList(animal) {
  const result = useQuery(["breeds", animal], fetchBreedList);

  return [result?.data?.breeds ?? [], result.status];
}
export default useBreedList;

//var localCache = {};

// function useBreedList(animal) {
//   var [status, setStatus] = useState("unloaded");
//   var [breedList, setBreedList] = useState([]);

//   useEffect(
//     function retriveOrFetchBreeds() {
//       if (!animal || typeof animal != "string") {
//         setBreedList([]);
//       } else if (localCache[animal]) {
//         setBreedList(localCache[animal]);
//       } else {
//         requestBreeds();
//       }

//       async function requestBreeds() {
//         var res = await fetch(
//           `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
//         );

//         var json = await res.json();

//         localCache[animal] = json.breeds || [];
//         setBreedList(localCache[animal]);
//         setStatus("loaded");
//       }
//     },
//     [animal]
//   );

//   return [breedList, status];
// }
