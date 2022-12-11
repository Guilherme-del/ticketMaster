import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <div class="logo">
          <img
            alt=""
            src="https://storage.googleapis.com/ecdt-logo-saida/dff684a4363973edf26c37b0fd84c611cb5c6c9c55d0fc1823ed8819537e4d8b/MLABS.webp"
            class="logo"
          />
        </div>
        <div class="lslogan">
          <p>Venha se divertir com a gente!</p>
        </div>

        <input
          type="text"
          placeholder="Nome do usuario"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="senha"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Entrar
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
