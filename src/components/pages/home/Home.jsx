import { Link } from "react-router-dom";
import "./Home.scss";
import { RiAccountPinCircleLine } from "react-icons/ri";
import AuthContext from "../../../utils/context";
import { useState, useEffect, useContext } from "react";
import { HOTELS_URL } from "../../../utils/api";
import HotelCard from "../../hotel_items/HotelCard";

const Home = () => {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(HOTELS_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setHotel(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <div className="info_section">
        <div className="account_icon">
          {auth ? (
            <>
              <h4 className="loggedUser">{`${
                auth.user.username + " "
              }`}</h4>
            </>
          ) : (
            <></>
          )}
          <RiAccountPinCircleLine style={{fontSize:"2em"}}/>
        </div>
      </div>
      <div className="hero_container">
        <h1>Check out our hotels and apartments</h1>
        <div className="action_Btn">
          <Link to="/hotels">Find now</Link>
        </div>
      </div>
      <div className="featured_hotels_container">
        <h2>Our most popular hotels</h2>
        {hotel.map(function (hotel, idx) {
          const { name } = hotel.attributes;
          return <HotelCard key={idx} id={hotel.id} name={name} />;
        })}
      </div>
    </>
  );
};

export default Home;

/*<div className={classes.hero_header}>
        <img src="/images/hero_header.jpg" />
        <div className={classes.hero_text}>
          <h2>Check out our hotels and apartments</h2>
          
        </div>
      </div>

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
      
      */
