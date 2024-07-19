import { useState } from "react";
import useBreedList from "../hooks/useBreedList";

var ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function Form({ onSubmit }) {
  const [animal, setAnimal] = useState("dog");
  const [breedList, status] = useBreedList(animal);

  function handleSumbit(e) {
    e.preventDefault();
    const newParams = {
      animal: e.target.animal.value,
      breed: e.target.breed.value,
      location: e.target.location.value,
    };

    onSubmit(newParams);
  }

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="location">
        Location
        <input
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
          onChange={(e) => setAnimal(e.target.value)}
          value={animal}
          defaultValue={animal}
        >
          {ANIMALS.map(function renderAnimalOp(animal) {
            return (
              <option value={animal} key={animal}>
                {animal}
              </option>
            );
          })}
        </select>
      </label>

      <label htmlFor="breed">
        Breeds
        <select disabled={status == "unloaded"} name="breed" id="breed">
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
