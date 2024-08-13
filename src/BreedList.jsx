import { useState, useEffect } from "react";

let localCache = {}; //to store the breeds of previously visited animal
export default function useBreedList(animal) {
  const [status, setStatus] = useState("unloaded");
  const [breedList, setBreedlist] = useState([]);
  useEffect(() => {
    if (!animal) {
      setBreedlist([]);
    } else if (localCache[animal]) {
      setBreedlist(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedlist([]);
      setStatus("loading");
      let res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedlist(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
}
