import { Link } from "react-router-dom";

function HotelCard({ id, name, image_url, description }) {
  return (
    <Link to={`../details/${id}`}>
      <div className="hotel_card">
        <img src={image_url} alt="hotel" />
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default HotelCard;
