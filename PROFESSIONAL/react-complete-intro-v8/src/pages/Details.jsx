import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPet from "../services/fetchPet";
import { useState } from "react";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";

function Details() {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);

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
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>

      {showModal && (
        <Modal>
          <div>
            <h1>Would you like yo adopt {pet.name}?</h1>
            <div className="buttons">
              <button>Yes</button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Details;
