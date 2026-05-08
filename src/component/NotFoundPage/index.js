import "./index.css";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="notfound">
      <h2>404</h2>
      <p>Oops! Page not found</p>

      <button onClick={() => history.push("/")}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
