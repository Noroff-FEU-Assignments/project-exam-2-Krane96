import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HOTELS_URL, BOOKINGS_PATH, BASE_URL } from "../../../utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FourStar } from "../../hotel_items/hotel_stars";
import { ImMug } from "react-icons/im";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaSmokingBan } from "react-icons/fa";
import { MdPets, MdOutlineRestaurantMenu } from "react-icons/md";
import { TabTitle } from "../../../utils/TitleAndIcon";
import { bookingSchema } from "../../../utils/yupSchema";
import { motion } from "framer-motion";

const Details = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

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
    alert("Booking made!");
  };

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
    return <div>ERROR: An error occured</div>;
  }
  TabTitle("Holidaze | " + `${details.name}`);
  return (
    <motion.div
      className="hotel_details"
      initial={false}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="hotel_details_flex">
        <img src={details.image_url} alt="hotel" />
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
                Free Parking
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
        </div>
      </div>
      <div className="details_flex_wrap">
        <div className="details_flex">
          <h3>Description</h3>
          <p className="details-p">{details.description}</p>
        </div>
        <h5>
          Address:
          <br />
          {details.address}
        </h5>
      </div>
      <form onSubmit={handleSubmit(onBooking)} className="booking_form">
        <fieldset>
          <input value={details.name} {...register("hotel")} disabled />
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
              {errors.CheckInDate && (
                <span className="form-error">{errors.CheckInDate.message}</span>
              )}
            </div>
            <div className="date">
              Check Out:
              <input
                type="date"
                {...register("CheckOutDate")}
                className="form-info"
              />
              {errors.CheckOutDate && (
                <span className="form-error">
                  {errors.CheckOutDate.message}
                </span>
              )}
            </div>
          </div>
          <h5 style={{ textAlign: "center", margin: ".5rem auto" }}>
            {details.price},-NOK
          </h5>
          <button className="Btn">Book</button>
        </fieldset>
      </form>
    </motion.div>
  );
};

export default Details;
