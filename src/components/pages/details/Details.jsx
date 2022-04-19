import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HotelCard from "../../hotel_items/HotelCard";
import { HOTELS_URL } from "../../../utils/api";

const HotelDetails = () => {
  const [hotel, setHotel] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate("/");
  }

  const url = HOTELS_URL + "/" + id;

  useEffect(() => {
    axios.get(url).then((response) => setHotel(response.hotel.hotel));
  }, [url]);

  return (
    <div className="hotel">
      {hotel.map(function (hotel) {
        const { name, description, id } = hotel.attributes;
        return <HotelCard name={name} description={description} id={id} />;
      })}
    </div>
  );
};

export default HotelDetails;
