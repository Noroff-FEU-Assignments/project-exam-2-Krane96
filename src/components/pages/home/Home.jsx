import { Link } from "react-router-dom";
import classes from "./Home.module.scss";
import { RiAccountPinCircleLine } from "react-icons/ri";
import AuthContext from "../../../utils/context";
import { useContext } from "react";


const Home = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <>
      <div className={classes.info_section}>
        <div className={classes.account_icon}>
        {auth ? (
            <>
             <h3 className="loggedUser">{`Hi, ${auth.user.username + " "}`}</h3>
            </>
          ) : (
            <></>
          )}
          <RiAccountPinCircleLine />
          
        </div>
      </div>
      
    </>
  );
};

export default Home;

/*<div className={classes.hero_header}>
        <img src="/images/hero_header.jpg" />
        <div className={classes.hero_text}>
          <h2>Check out our hotels and apartments</h2>
          <Link to="/hotels">Find now</Link>
        </div>
      </div>
      
      */