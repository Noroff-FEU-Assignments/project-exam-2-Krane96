import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL, BOOKINGS_PATH } from "../../../utils/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import AdminDashboard from "../AdminDashboard";

const schema = yup.object().shape({
  hotel: yup.string().required("Please enter establishment name"),
  name: yup.string().required("Please enter establishment name"),
});

const CreateForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onCreateBooking = async (data) => {
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
    alert("Booking created!");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onCreateBooking)} className="form_basic">
      <h2 style={{marginBottom:".5rem"}}>Manual Booking</h2>
        <fieldset>
          <input
            {...register("hotel")}
            placeholder="Hotel Name"
            className="form-info block hidden"
          />
          <input
            {...register("name")}
            placeholder="Your Name"
            className="form-info block"
          />
          <div className="date_container">
            <div className="date">
              Check In:
              <input
                type="date"
                {...register("CheckInDate")}
                className="form-info "
              />
            </div>
            <div className="date">
              Check Out:
              <input
                type="date"
                {...register("CheckOutDate")}
                className="form-info"
              />
            </div>
          </div>
          <button className="Btn">Book</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreateForm;
