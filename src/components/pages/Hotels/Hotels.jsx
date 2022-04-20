import axios from "axios";
import { useState, useEffect } from "react";
import { HOTELS_URL, POPULATE } from "../../../utils/api";
import HotelCard from "../../hotel_items/HotelCard";
const imgURL = "https://hotel-strapi-exam.herokuapp.com/api/upload/files/";

const Hotels = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(HOTELS_URL + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <div className="cards-container grid">
      {data.length > 0
        ? data.map((hotel, idx) => {
            return (
              <div className="hotel-card" key={idx}>
                <img
                  src={imgURL + hotel.attributes.image.data.id}
                  alt="hotel img"
                />
                <h2>{hotel.attributes.name}</h2>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Hotels;
