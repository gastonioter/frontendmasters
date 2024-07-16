import { useState } from "react";

// let counter = 0;
function SearchForm() {
  const [location, setLocation] = useState("");
  //   counter++;
  return (
    <div className="search-params">
      <form>
        {/* <h1>{counter}</h1> */}
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
      </form>
    </div>
  );
}

export default SearchForm;
