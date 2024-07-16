import React from "react";
import { createRoot } from "react-dom/client";

import SearchForm from "./SearchForm";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

function App() {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchForm />
    </div>
  );
}
