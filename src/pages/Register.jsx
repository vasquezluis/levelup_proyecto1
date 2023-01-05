import { useState } from "react";

// obtener useAuth del context
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

function Register() {
  // obtener datos del usuario por el formulario
  const [user, setuser] = useState({ email: "", password: "" });

  // obtener singup del contexto
  const { singup } = useAuth();

  // instanciar useNavigate
  const navigate = useNavigate();

  // estado para el manejo de errores
  const [error, setError] = useState("");

  // guardar datos en el estado
  const handleChange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      // ejecutar la funcion singup y pasar los parametros del usuario
      await singup(user.email, user.password);

      // redireccionar al home luego del registro
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error !== null || undefined ? <Alert message={error} /> : null}
      <div className="bg-slate-800 text-white px-8 pt-6 pb-4 pr-4">
        <p className="text-2xl w-dull block font-bold">REGISTRO</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 shadow-md px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shado appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="Your email@company.ltd"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="passwod"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
          />
        </div>

        <p className="my-4 text-sm flex justify-between px-3 text-white">
          Ya tienes una cuenta? <Link to="/login" className="font-bold">Login</Link>
        </p>

        <button className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
