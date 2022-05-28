import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../utils/context";
import AdminDashboard from "../../admin_items/AdminDashboard";
import { TabTitle } from "../../../utils/TitleAndIcon";
import { motion } from "framer-motion";

const Admin = () => {
  TabTitle("Holidaze | Admin");
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState(null);

  return (
    <>
      <motion.div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        initial={false}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      >
        <div className="admin_wrapper">
          <div className="admin_container">
            {auth ? (
              <>
                <AdminDashboard />
                {error ? "Error" : <></>}
              </>
            ) : (
              <Link to="/login" />
            )[setAuth() + setError()]}
          </div>
        </div>
        
      </motion.div>
    </>
  );
};

export default Admin;
