import { useEffect, useState } from "react";
import useBreedList from "../hooks/useBreedList";

var ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function Form({ onUpdatePets }) {
  const [location, setLocation] = useState("Salt Lake City");
  const [animal, setAnimal] = useState();
  const [breed, setBreed] = useState();
  const [breedList, status] = useBreedList(animal);

  useEffect(function () {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    var res =
      await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
  `);

    var json = await res.json();

    onUpdatePets(json.pets);
  }

  function onSubmit(e) {
    e.preventDefault();
    requestPets();
  }

  function onSelectedAnimal(e) {
    setAnimal(e.target.value);
    setBreed("");
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="location">
        Location
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
          type="text"
          name="location"
          id="location"
          placeholder="Location"
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          name="animal"
          id="animal"
          onChange={onSelectedAnimal}
          value={animal}
        >
          {ANIMALS.map(function renderAnimalOp(animal) {
            return (
              <option value={animal} key={animal} selected={animal == "dog"}>
                {animal}
              </option>
            );
          })}
        </select>
      </label>

      <label htmlFor="breed">
        Breeds
        <select
          disabled={status == "unloaded"}
          name="breed"
          id="breed"
          onChange={(e) => {
            setBreed(e.target.value);
          }}
          value={breed}
        >
          <option />
          {breedList.map(function renderBreed(breed) {
            return (
              <option value={breed} key={breed}>
                {breed}
              </option>
            );
          })}
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}

export default Form;
