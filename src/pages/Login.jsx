import { useState } from "react";

// obtener useAuth del context
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../components/Alert";

function Login() {
  // obtener datos del usuario por el formulario
  const [user, setuser] = useState({ email: "", password: "" });

  // obtener singup del contexto
  const { login } = useAuth();

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
      await login(user.email, user.password);

      // redireccionar al home luego del registro
      navigate("/");
    } catch (error) {
      console.log(error.message)
      if (error.code === "auth/invalid-email")
        setError("El correo no es válido");
      else if (error.code === "auth/internal-error")
        setError("La contraseña no es válida");
      else if (error.code === "auth/wrong-password")
        setError(`La contraseña es incorrecta`);
      else if (error.code === "auth/user-not-found")
        setError(`El correo ${user.email} no está registrado`);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <div className="bg-slate-800 text-white px-8 pt-6 pb-4 pr-4">
        <p className="text-2xl w-dull block font-bold">LOGIN</p>
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
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
          No tienes una cuenta?{" "}
          <Link to="/register" className="font-bold">
            Register
          </Link>
        </p>

        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
