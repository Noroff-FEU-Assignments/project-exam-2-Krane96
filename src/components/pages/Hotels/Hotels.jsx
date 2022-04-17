import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, HOTELS_URL, POPULATE } from "../../../utils/api";
import HotelCard from "../../hotel_items/HotelCard";

const Hotels = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(BASE_URL + HOTELS_URL + POPULATE)
        .then((response) => setData(response.data.data));
    }, []);
  
    return (
      <div>
        {data.length > 0
          ? data.map((hotel, idx) => {
              const { name, description, id } = hotel.attributes;
              return (
                <HotelCard
                  key={idx}
                  name={name}
                  description={description}
                  id={id}
                />
              );
            })
          : null}
      </div>
    );
  };

export default Hotels