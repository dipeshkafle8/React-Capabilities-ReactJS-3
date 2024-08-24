import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchParams from "./display/SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./fetchPetDetails/Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const adoptedPet = useState(null);
  {
    /** whole hook is inside of adoptedPet so this value can changed by another element which has access of this */
  }
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            {" "}
            {/*adoptedPet will be available to all the elements wrapped inside of it*/}
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
