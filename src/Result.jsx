import Pet from "./Pet";
import PropTypes from "prop-types";
function Results({ pets }) {
  console.log(pets);
  return (
    <>
      <div id="container">
        {!pets.length ? (
          <h1>No pets found</h1>
        ) : (
          pets.map((el) => (
            <Pet
              id={el.id}
              name={el.name}
              key={el.id}
              images={el.images}
              desc={el.description}
            />
          ))
        )}
      </div>
    </>
  );
}
Results.propTypes = {
  pets: PropTypes.array,
};

export default Results;
