const fetchPet = async ({ queryKey }) => {
  console.log(queryKey);
  const id = queryKey[1];
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  return apiRes.json(); //react queries takes promise
};

export default fetchPet;
