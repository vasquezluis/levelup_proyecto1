import Main from "../components/Main/Main";
import { useAuth } from "../context/authContext";

function UserHome() {
  // variables del contexto
  const { user, loading, logout } = useAuth();

  if (loading) return <h1>Loading</h1>;

  // manejar el logout
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="w-full m-auto">
      <Main user={user.email} logout={handleLogOut} />
    </div>
  );
}

export default UserHome;
