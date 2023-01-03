import { useState, useContext, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// usar auth de firebase
import { auth } from "../firebase.js";

// contenedor de valor usuario
export const authConext = createContext();

// usar Auth
export const useAuth = () => {
  const context = useContext(authConext);
  if (!context) throw new Error("No hay un proveedor de autenticacion");
  return context;
};

// funcion que permite acceder el valor desde cualquier hijo
export function AuthProvider({ children }) {
  // credenciales del usuario
  const [user, setUser] = useState(null);

  // estado loading
  const [loading, setLoading] = useState(true);

  //funcion para registro
  const singup = (email, password) => {
    // ejecutar funcion de firebase para registro
    createUserWithEmailAndPassword(auth, email, password);
  };

  // funcion para login
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  // funcion para logout
  const logout = () => signOut(auth)

  // funcion para obtener las credenciales del usuario cada vez que cambia
  useEffect(() => {

    // funcion para manejar logout
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      console.log(currentUser)

      // almacenar las credenciales del usuario actual
      setUser(currentUser)

      // despues de obtener las credenciales
      setLoading(false)
    })

    // ejecutar return despues del desmontaje del componente
    return () => unsubscribe()

  },[])

  // exportar variables y funciones
  return (
    <authConext.Provider value={{ singup, login, logout, user, loading }}>
      {children}
    </authConext.Provider>
  );
}
