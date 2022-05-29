import { useState, useEffect } from "react";
import HotelCard from "../../hotel_items/HotelCard";
import { HOTELS_URL } from "../../../utils/api";
import SearchBar from "../../search/SearchBar";
import { TabTitle } from "../../../utils/TitleAndIcon";
import { motion } from "framer-motion";

const Hotels = () => {
  TabTitle("Holidaze | Hotels");
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
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
    }
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
        <div className="hotel_container">
          <h2>Our available hotels</h2>
          <div className="grid_hotels">
            {hotel.map(function (hotel, idx) {
              const { name, image_url } = hotel.attributes;
              return (
                <HotelCard
                  key={idx}
                  id={hotel.id}
                  name={name}
                  image_url={image_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hotels;
