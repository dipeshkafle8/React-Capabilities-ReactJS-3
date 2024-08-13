import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
