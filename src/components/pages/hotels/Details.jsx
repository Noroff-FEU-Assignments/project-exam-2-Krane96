import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HotelCard from "../../hotel_items/HotelCard";
import { HOTELS_URL, BOOKINGS_PATH, BASE_URL } from "../../../utils/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import {
  OneStar,
  TwoStar,
  ThreeStar,
  FourStar,
  FiveStar,
} from "../../hotel_items/hotel_stars";
import { ImMug } from "react-icons/im";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaSmokingBan } from "react-icons/fa";
import { MdPets, MdOutlineRestaurantMenu } from "react-icons/md";
import { TabTitle } from "../../../utils/TitleAndIcon";
import { bookingSchema } from "../../../utils/yupSchema";

const Details = () => {
 
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [star, setStar] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  useEffect(function () {
    async function fetchData() {
      try {
        const url = HOTELS_URL + "/" + id;
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          setDetails(json.data.attributes);
        } else {
          setError("An error occurred");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const [submitting, setSubmitting] = useState(false);

  const onBooking = async (data) => {
    const options = {
      data: {
        name: data.name,
        hotel: data.hotel,
        CheckInDate: data.CheckInDate,
        CheckOutDate: data.CheckOutDate,
      },
    };
    const responseData = await axios.post(BASE_URL + BOOKINGS_PATH, options);
    console.log(responseData);
    alert('Booking made!');
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }
  TabTitle('Holidaze | ' + `${details.name}`);
  return (
    <div className="hotel_details">
      <img src={details.image_url} />
      <div className="hotel_details_card">
        <h2>{details.name}</h2>
        <span className="stars">
          <FourStar />
        </span>
        <div className="offers">
          <h3>This stay offers</h3>
          <ul className="offers_container grid_two">
            <li>
              <ImMug />
              Free Breakfast
            </li>
            <li>
              <AiFillCar />
              Parking available
            </li>
            <li>
              <CgSmartHomeRefrigerator />
              Refrigerator
            </li>
            <li>
              <AiOutlineWifi />
              Wifi
            </li>
            <li>
              <GiWeightLiftingUp />
              Gym
            </li>
            <li>
              <MdPets />
              Pet friendly
            </li>
            <li>
              <FaSmokingBan />
              No smoking
            </li>
            <li>
              <MdOutlineRestaurantMenu />
              Bar & Restaurant
            </li>
          </ul>
        </div>
        <h3>Description</h3>
        <p className="details-p">{details.description}</p>
        <h5 style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Address:
          <br />
          {details.address}
        </h5>
      </div>

      <form onSubmit={handleSubmit(onBooking)} className="booking_form">
        <fieldset>
          <input
            value={details.name}
            {...register("hotel")}
            className="form-info block hidden"
          />
          {errors.hotel && (
          <span className="form-error">{errors.hotel.message}</span>
        )}
          <input
            {...register("name")}
            placeholder="Your Name"
            className="form-info block"
          />
          {errors.name && (
          <span className="form-error">{errors.name.message}</span>
        )}

          <div className="date_container">
            <div className="date">
              Check In:
              <input
                type="date"
                {...register("CheckInDate")}
                className="form-info "
              />
              {errors.message && (
          <span className="form-error">{errors.checkout.message}</span>
        )}
            </div>
            <div className="date">
              Check Out:
              <input
                type="date"
                {...register("CheckOutDate")}
                className="form-info"
              />
              {errors.message && (
          <span className="form-error">{errors.checkin.message}</span>
        )}
            </div>
          </div>
          <h5 style={{ textAlign: "center",margin:".5rem auto" }}>{details.price},-NOK</h5>
          <button className="Btn">Book</button>
        </fieldset>
      </form>
    </div>
  );
  
};

export default Details;


