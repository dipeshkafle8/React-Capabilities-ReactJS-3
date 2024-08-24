import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; //Link doesn't reload the page a tag does
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Modal from "../Modal";
function Details() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  //if with that current key details and id if previously already fetched then no need fetch
  //but if not then go to fetchpet and fetch the data
  let results = useQuery(["details", id], fetchPet); //already fetched data stored in cache key=[](values inside these)

  if (results.isError) {
    return <h1>Oh NO!</h1>;
  }

  if (results.isLoading) {
    return (
      <>
        <div className="loader-pane">
          <div className="loader">🔃</div>
        </div>
      </>
    );
  }

  let pet = results.data.pets[0]; //fetched data will be present in data property
  return (
    <>
      <div className="details">
        <Link to="/">Go to HomePage</Link>
        <h1>{pet.animal}</h1>
        <h2>{pet.breed}</h2>
        <button onClick={() => setShowModal(true)}>Adopt Me!</button>
        <p className="description">{pet.description}</p>
        {showModal ? (
          <Modal>
            <h1>Are you sure about {pet.name}</h1>
            <button>Yes</button>
            <button onClick={() => setShowModal(false)}>No</button>
          </Modal>
        ) : null}
      </div>
    </>
  );
}
export default Details;
