import { Link } from "react-router-dom";
import AuthContext from "../../../utils/context";
import { useState, useEffect, useContext } from "react";
import { HOTELS_URL } from "../../../utils/api";
import SearchBar from "../../search/SearchBar";
import { TabTitle } from "../../../utils/TitleAndIcon";
import FeaturedCard from "../../hotel_items/FeaturedCard";
import { motion } from "framer-motion";

const Home = () => {
  TabTitle("Holidaze");
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(function () {
    const fetchData = async () => {
      try {
        const response = await fetch(HOTELS_URL);

        if (response.ok) {
          const json = await response.json();
          setHotel(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader_container">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <motion.div
      initial={false}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SearchBar />
      </div>
      <section className="home_hero">
        <div className="hero_container">
          <div className="home_hero_content">
            <h1>Welcome to Bergen</h1>
            <h3>
              The best place to <br /> find your temporary home
            </h3>
            <div className="action_Btn">
              <Link to="/hotels">Find Hotels</Link>
            </div>
          </div>
        </div>
      </section>
      <div style={{ maxWidth: "1200px", margin: "3rem auto" }}>
        
        <h2 className="header_container">Popular Hotels</h2>
        <div className="featured_container">
          {hotel.map(function (hotel, idx) {
            if (hotel.attributes.featured) {
              const { name, price } = hotel.attributes;
              return (
                <div
                  className="featured_background_image"
                  key={idx}
                  style={{
                    backgroundImage: `url('${hotel.attributes.image_url}')`,
                  }}
                >
                  <FeaturedCard id={hotel.id} name={name} price={price} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="contact_hero">
        <div className="contact_hero_content">
          <h2>Any questions?</h2>
          <div className="action_Btn">
            <Link to="/contact">Ask us here</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

