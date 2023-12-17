import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div>
      <p className="links">
        <Link to="/form">Form</Link>
        <Link to="/contactlist">ContactList</Link>
      </p>
    </div>
  );
}

export default Home;
