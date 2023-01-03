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
      console.log(error);
    }
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <Main user={user.email} logout={handleLogOut} />
    </>
  );
}

export default UserHome;
