import React from "react";
import { createRoot } from "react-dom/client";
import SearchForm from "./components/SearchForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./pages/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const container = document.getElementById("root");
const root = createRoot(container);

// Una vez que hagas un fetch, no lo vuevlas a hacer. This is what im saying with Infinity
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

root.render(<App />);

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">AdoptMe</Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchForm />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
