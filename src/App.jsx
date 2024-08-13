/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Results from "./Result.jsx";
import useBreedList from "./BreedList.jsx";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function App() {
  console.log("Re rendering happening");
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setbreed] = useState("");
  const [pets, setPets] = useState([]);
  let [breeds] = useBreedList(animal);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    data = await data.json();
    setPets(data.pets);
  }

  return (
    <>
      <h1>This is Dipesh Kafle</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevents form from getting submitted
          fetchData();
        }}
      >
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />{" "}
        <br />
        <br />
        <label htmlFor="animal">Animal:</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setbreed("");
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
        <select
          id="breed"
          disabled={breeds.length === 0}
          onChange={(e) => {
            setbreed(e.target.value);
          }}
        >
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

export default App;
