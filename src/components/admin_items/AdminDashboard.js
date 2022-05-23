import { NavLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineCreate } from "react-icons/md";
import AuthContext from "../../utils/context";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const navAdminStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      boxShadow: isActive
        ? "rgba(0, 0, 0, 0.40) 2px 2px 3.6px"
        : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    };
  };
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
    <div className="logout_container">
    <button onClick={logout} className="Btn">
    Log out
  </button>
  </div>
    <div className="admin_dashboard">
      <div className="admin_navigation">
        <ul>
          <li>
            <NavLink to="/admin/messages" style={navAdminStyles}>
              <AiOutlineMail />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/bookings" style={navAdminStyles}>
              <BsBookmarks />
              Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/create" style={navAdminStyles}>
              <MdOutlineCreate />
              Create Booking
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    
  </>
  );
};

export default AdminDashboard;
