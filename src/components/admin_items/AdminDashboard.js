import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <nav className="admin_navigation">
        <ul>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="">Two</Link>
          </li>
          <li>
            <Link to="">Three</Link>
          </li>
        </ul>
        
      </nav>
    </div>
  );
};

export default AdminDashboard;
