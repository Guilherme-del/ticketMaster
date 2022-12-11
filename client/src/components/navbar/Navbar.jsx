import "./navbar.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"> MbLabsTickets </span>
        </Link>
        {user ? (
          <div>
            <FontAwesomeIcon icon={faUser} />
            {user.username}
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Registre-se</button>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Entrar</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
