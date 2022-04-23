import { useState, useEffect } from "react";
import HotelCard from "../../hotel_items/HotelCard";
import { HOTELS_URL } from "../../../utils/api";

function Hotels() {
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
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="hotel">
			{hotel.map(function (hotel, idx) {
				const { name } = hotel.attributes;
				return <HotelCard key={idx} id={hotel.id} name={name}  />;
			})}
		</div>
	);
}

export default Hotels;
