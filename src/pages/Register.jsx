import { useState } from "react";

// obtener useAuth del context
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Register() {
  // obtener datos del usuario por el formulario
  const [user, setuser] = useState({ email: "", password: "" });

  // guardar datos en el estado
  const handleChange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };

  // obtener singup del contexto
  const { singup } = useAuth();

  // instanciar useNavigate
  const navigate = useNavigate();

  // estado para el manejo de errores
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      // ejecutar la funcion singup y pasar los parametros del usuario
      await singup(user.email, user.password);

      // redireccionar al home luego del registro
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
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

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
