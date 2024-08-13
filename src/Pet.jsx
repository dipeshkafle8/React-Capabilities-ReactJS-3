import PropTypes from "prop-types";
let url = "http://pets-images.dev-apis.com/pets/none.jpg";
function Pet({ name, images, desc }) {
  if (images.length) {
    url = images[0];
  }
  return (
    <>
      <div className="lists">
        <h1>{name}</h1>
        <img src={url} alt={name} />
        <p>{desc}</p>
      </div>
    </>
  );
}
Pet.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  images: PropTypes.array,
};

export default Pet;
