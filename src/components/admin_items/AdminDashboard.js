import { NavLink } from "react-router-dom";
import AuthContext from "../../utils/context";
import { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineCreate } from "react-icons/md";
import useToggle from "../../hooks/useToggle";

const AdminDashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [toggle, setToggleClass] = useToggle(false);

  const navAdminStyles = ({ isActive }) => {
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      boxShadow: isActive ? 'rgba(0, 0, 0, 0.40) 2px 2px 3.6px' : 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    }
  };

  return (
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
  );
};

export default AdminDashboard;

/* 
{auth ? (
              <>
                <NavLink to="/admin">Admin</NavLink> {" "}
                <button onClick={logout}>Log out</button>
              </>
            ) : (
              <button
                className={`${hideToggleCheck}`}
                onClick={() => {
                  setOpenLogin(true);
                  menuToggle();
                  handleToggle();
                }}
              >
                Login
              </button>
            )}



            <h3>{`Hi, ${auth.user.username + " "}`}</h3>
      <h3>Welcome back</h3>
      <div className="admin_navigation">
        <ul>
          <li>
            <NavLink to="/admin/messages"><AiOutlineMail/>Messages</NavLink>
          </li>
          <li>
            <NavLink to="/admin/bookings"><BsBookmarks/>Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/admin/create"><MdOutlineCreate/>Create Booking</NavLink>
          </li>
        </ul>
      </div>
*/
