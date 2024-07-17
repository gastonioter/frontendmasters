import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPet from "../services/fetchPet";

function Details() {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);

  if (result.isError) {
    return <h1>ohno!</h1>;
  }
  if (result.isLoading) {
    return (
      <div className="loading-pange">
        <div className="loader">🐶</div>
      </div>
    );
  }

  const pet = result.data.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
}

export default Details;
