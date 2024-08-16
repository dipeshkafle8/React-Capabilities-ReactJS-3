import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Details() {
  const { id } = useParams();
  return (
    <>
      <h1>
        <Link to="/">Go to home</Link>
      </h1>
      <h1>Adopt Me!{id}</h1>
    </>
  );
}
export default Details;
