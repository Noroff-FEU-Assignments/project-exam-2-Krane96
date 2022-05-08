import { Link } from "react-router-dom";
import AuthContext from "../../utils/context";
import { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineCreate } from "react-icons/md";

const AdminDashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div>
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
            <Link to=""><MdOutlineCreate/>Create Booking</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
