import Results from "./Results";
import Form from "./Form";
import { useState } from "react";

function SearchForm() {
  const [pets, setPets] = useState([]);

  function onUpdatePets(pets) {
    setPets(pets);
  }

  return (
    <div className="search-params">
      <Form onUpdatePets={onUpdatePets} />
      <Results pets={pets} />
    </div>
  );
}

export default SearchForm;
