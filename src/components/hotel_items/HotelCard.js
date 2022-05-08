import { icons } from "react-icons";
import { Link } from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import { BASE_URL } from "../../utils/api";


function HotelCard({ id, name, image_url,description }) {
	return (
		<Link to={`../details/${id}`}>
      <div className="hotel_card">
			<img src={image_url}/>
			<h4>{name}</h4>
			<p>{description}</p>
      </div>
		</Link>
	);
}

export default HotelCard;
