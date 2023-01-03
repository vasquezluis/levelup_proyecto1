import { useState } from "react";

// obtener useAuth del context
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  // obtener datos del usuario por el formulario
  const [user, setuser] = useState({ email: "", password: "" });

  // obtener singup del contexto
  const { login } = useAuth();

  // instanciar useNavigate
  const navigate = useNavigate();

  // estado para el manejo de errores
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      // ejecutar la funcion singup y pasar los parametros del usuario
      await login(user.email, user.password);

      // redireccionar al home luego del registro
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // guardar datos en el estado
  const handleChange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="passwod">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
