import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HotelCard from "../../hotel_items/HotelCard";
import { HOTELS_URL, BASE_URL } from "../../../utils/api";

function Details() {
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
}

export default Details;