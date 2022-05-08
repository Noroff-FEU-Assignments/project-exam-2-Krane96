import AuthContext from "../../../utils/context";
import { useContext } from "react";
import { RiAccountPinCircleLine } from "react-icons/ri";

const LoggedInPanel = () => {
    const [auth, setAuth] = useContext(AuthContext);
  return (
      <>
    <div className="info_section">
      <div className="account_icon">
        {auth ? (
          <>
            <h4 className="loggedUser">{`${auth.user.username + " "}`}</h4>
          </>
        ) : (
          <></>
        )}

        <RiAccountPinCircleLine style={{ fontSize: "2em" }} />
      </div>
    </div>
    </>
  );
};

export default LoggedInPanel;
