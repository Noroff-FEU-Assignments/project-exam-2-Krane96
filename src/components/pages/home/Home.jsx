import { Link } from "react-router-dom";
import classes from "./Home.module.scss";
import { RiAccountPinCircleLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className={classes.info_section}>
        <div className={classes.account_icon}>
          <RiAccountPinCircleLine />
        </div>
      </div>
      <div className={classes.hero_header}>
        <img src="/images/hero_header.jpg" />
        <div className={classes.hero_text}>
          <h2>Check out our hotels and apartments</h2>
          <Link to="/hotels">Find now</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
