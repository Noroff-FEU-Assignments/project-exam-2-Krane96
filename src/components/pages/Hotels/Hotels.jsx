import axios from "axios";
import { useState, useEffect } from "react";
import { HOTELS_URL, POPULATE } from "../../../utils/api";
import HotelCard from "../../hotel_items/HotelCard";
import { useParams } from "react-router-dom";
const imgURL = "https://hotel-strapi-exam.herokuapp.com/api/upload/files/";

const Hotels = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(HOTELS_URL + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <div>
      {data.length > 0
        ? data.map((hotel, idx) => {
            const { name, id, img } = hotel.attributes;
            return (
              <HotelCard
                key={idx}
                name={name}
                id={id}
                img={img}
              />
            );
          })
        : null}
    </div>
  );
};

export default Hotels;
