import Pet from "./Pet";

function Results({ pets }) {
  console.log(pets);
  function renderPet(pet) {
    return (
      <Pet
        name={pet.name}
        location={`${pet.city},${pet.state}`}
        animal={pet.animal}
        images={pet.images}
        breed={pet.breed}
        key={pet.id}
      />
    );
  }

  return (
    <div className="search">
      {!pets.length ? <h1>No Pets Found</h1> : pets.map(renderPet)}
    </div>
  );
}

export default Results;
