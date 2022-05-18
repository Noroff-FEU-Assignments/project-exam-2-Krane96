import { Link } from "react-router-dom";
import AuthContext from "../../../utils/context";
import { useState, useEffect, useContext, useRef } from "react";
import { HOTELS_URL } from "../../../utils/api";
import FeaturedCard from "../../hotel_items/FeaturedCard";
import CarouselHotels from "../../carousels/CarouselHotels";
import { motion } from "framer-motion";
import SearchBar from "../../search/SearchBar";
import { TabTitle } from "../../../utils/TitleAndIcon";

const Home = () => {
  TabTitle('Holidaze');
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    //setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

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
      <SearchBar />

      <motion.div
        ref={carousel}
        className="featured_carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <h2>Featured hotels</h2>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner_carousel"
        >
          {hotel.map(function (hotel, idx) {
            const { name, image_url } = hotel.attributes;
            return (
              <motion.div className="item_carousel" key={idx}>
                <FeaturedCard id={hotel.id} name={name} image_url={image_url} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <div className="contact_hero">
        <div className="contact_hero_content">
          <h2>Any questions?</h2>
          <div className="action_Btn">
            <Link to="/contact">Ask us here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/* 

      */
