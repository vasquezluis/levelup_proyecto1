import "./App.css";

import { Route, Routes } from "react-router-dom";

import UserHome from "./pages/UserHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <UserHome />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
