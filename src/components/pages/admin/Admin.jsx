import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../utils/context";
import "./Admin.scss";

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
      <div className="admin_wrapper">
        <div className="admin_container">
          {auth ? (
            <>
              <h3>{`Hi, ${auth.user.username + " "}`}</h3>
              <h3>Welcome back</h3>
              <nav className="admin_navigation">
                <ul>
                  <li>
                    <Link to="">One</Link>
                  </li>
                  <li>
                    <Link to="">Two</Link>
                  </li>
                  <li>
                    <Link to="">Three</Link>
                  </li>
                </ul>
              </nav>
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
