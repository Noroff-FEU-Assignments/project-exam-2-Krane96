import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HotelCard from "../../hotel_items/HotelCard";
import { HOTELS_URL, BOOKINGS_PATH, BASE_URL } from "../../../utils/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name!")
    .min(1, "Name must be at least 1 characters!"),
});

const Details = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
        email: data.email,
        message: data.message,
      },
    };
    const responseData = await axios.post(BASE_URL + BOOKINGS_PATH, options);
    console.log(responseData);
  };

  if (loading) {
    return (
      <div className="loader">
      </div>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="">
      <div className="">
        <div className="hotel_details_card">
          <img src={details.image_url} />
          <h3>{details.name}</h3>
          <p className="details-p">{details.description}</p>
          <h5>
            Address:
            <br />
            {details.address}
          </h5>
          <h5>{details.price},-NOK</h5>
        </div>
      </div>

      <form onBooking={handleSubmit(onBooking)} className="booking_form">
        <fieldset>
          <input
            value={details.name}
            {...register("hotel")}
            className="form-info block hidden"
          />
          <input
            {...register("name")}
            placeholder="Your Name"
            className="form-info block"
          />
          <div className="date_container">
            <div className="date">
              CheckIn Date:
              <input
                type="date"
                {...register("CheckInDate")}
                className="form-info "
              />
            </div>
            <div className="date">
              CheckOut Date:
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
    </div>
  );
};

export default Details;

/*
const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let navigate = useNavigate();

	const { id } = useParams();

	if (!id) {
		navigate("/");
	}

	const url = HOTELS_URL + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);

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
		},
		[]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="hotel-detail">
			<h1>{hotel.attributes.name}</h1>
		</div>
	);
*/
