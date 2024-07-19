import Results from "./Results";
import Form from "./Form";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "../services/fetchPets";

function SearchForm() {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const petsPromise = useQuery(["pets", requestParams], fetchPets);

  const pets = petsPromise?.data?.pets ?? [];

  function updateParams(params) {
    console.log(params);
    setRequestParams(params);
  }

  return (
    <div className="search-params">
      <Form onSubmit={updateParams} />
      <Results pets={pets} />
    </div>
  );
}

export default SearchForm;
