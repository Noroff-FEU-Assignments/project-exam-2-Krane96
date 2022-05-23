import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../utils/context";
import AdminDashboard from "../../admin_items/AdminDashboard";
import { TabTitle } from "../../../utils/TitleAndIcon";

const Admin = () => {
  TabTitle("Holidaze | Admin");
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState(null);

  return (
    <>
      <div className="admin_wrapper">
        <div className="admin_container">
          {auth ? (
            <>
              <AdminDashboard />
              {error ? "Error" : <></>}
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
