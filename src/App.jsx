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
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
