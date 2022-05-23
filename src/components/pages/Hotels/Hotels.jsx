import { useState, useEffect } from "react";
import HotelCard from "../../hotel_items/HotelCard";
import { HOTELS_URL } from "../../../utils/api";
import SearchBar from "../../search/SearchBar";
import { TabTitle } from "../../../utils/TitleAndIcon";

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
    return (
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
    );
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
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
    </>
  );
};

export default Hotels;
