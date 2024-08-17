import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Result.jsx";
import useBreedList from "../breed/BreedList.jsx";
import fetchSearch from "./fetchSearch.js";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  let results = useQuery(["search", requestParams], fetchSearch);
  const [animal, setAnimal] = useState("");
  let [breeds] = useBreedList(animal);
  let pets = results?.data?.pets ?? [];

  return (
    <>
      <h1>This is Dipesh Kafle</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevents form from getting submitted
          const formData = new FormData(e.target);
          let obj = {
            location: formData.get("location") ?? "",
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">Location:</label>
        <input type="text" name="location" id="location" /> <br />
        <br />
        <label htmlFor="animal">Animal:</label>
        <select
          id="animal"
          name="animal"
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option />
          {ANIMALS.map((value) => {
            return <option key={value}>{value}</option>;
          })}
        </select>
        <br />
        <br />
        <label htmlFor="breed">breed:</label>
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option />
          {breeds.map((el) => {
            return <option key={el}>{el}</option>;
          })}
        </select>
        <br />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </>
  );
}
export default SearchParams;
