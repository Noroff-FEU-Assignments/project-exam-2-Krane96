import { useContext, useEffect, useState } from "react";
import AuthContext from "../../utils/context";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div className="info_section">
      <div className="account_icon">
        {auth ? (
          <>
            <h4>{`${auth.user.username + " "}`}</h4>
            <Link to="/admin">
              <img src="/images/batman_avatar.png" style={{ width: "40px" }} />
            </Link>
          </>
        ) : (
          <>
            <div className="info_logged_out">
              <RiAccountPinCircleLine style={{ fontSize: "2em" }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoggedIn;
