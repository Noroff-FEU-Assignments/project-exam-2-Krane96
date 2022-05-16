import { Link } from "react-router-dom";
import AuthContext from "../../utils/context";
import { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineCreate } from "react-icons/md";
import useToggle from "../../hooks/useToggle";

const AdminDashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [toggle, setToggleClass] = useToggle(false);

  const toggleActiveClass = () => {

    setToggleClass(!toggle);
  }

  return (
    <div className="admin_dashboard">
      <div className="admin_navigation">
        <ul>
          <li>
            <Link to="/admin/messages"><AiOutlineMail/>Messages</Link>
          </li>
          <li>
            <Link to="/admin/bookings"><BsBookmarks/>Bookings</Link>
          </li>
          <li>
            <Link to="/admin/create"><MdOutlineCreate/>Create Booking</Link>
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
                <Link to="/admin">Admin</Link> {" "}
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
            <Link to="/admin/messages"><AiOutlineMail/>Messages</Link>
          </li>
          <li>
            <Link to="/admin/bookings"><BsBookmarks/>Bookings</Link>
          </li>
          <li>
            <Link to="/admin/create"><MdOutlineCreate/>Create Booking</Link>
          </li>
        </ul>
      </div>
*/