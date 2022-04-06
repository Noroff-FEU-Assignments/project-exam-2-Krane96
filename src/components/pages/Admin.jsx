import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../utils/context";

const Admin = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function logout() {
    const confirmLogOut = window.confirm("Do you want to log out?");
    if (confirmLogOut) {
      try {
        setAuth(null);
        navigate("/");
      } catch (error) {
        setError(error);
      }
    }
  }

  return (
    <>
     <div className="login-form">
        <div className="jhonny">
          {auth ? (
            <>
              <h3>{`Hi, ${auth.user.username + " "}`}</h3>
              <h3>Welcome back</h3>
              {error ? (
                "Error"
              ) : (
                <Link to="/login">
                  <button onClick={logout} className="button">
                    Log out
                  </button>
                </Link>
              )}
            </>
          ) : (
            <Link to="/login" />
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;