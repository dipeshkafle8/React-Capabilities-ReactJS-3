const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(`fetchBreedList/${animal} fetch not ok`);
  }
  return apiRes.json(); //react queries takes promise
};

export default fetchBreedList;
