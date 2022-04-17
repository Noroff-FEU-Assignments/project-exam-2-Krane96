import { Link } from "react-router-dom";

function HotelCard({  name, description, id }) {
  return (
    <div className="hotel-card">
      <Link to={`hotels/${id}`}>
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default HotelCard;