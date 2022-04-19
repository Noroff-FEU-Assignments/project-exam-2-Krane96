import { Link } from "react-router-dom";

const HotelCard = ({ name, image, id, idx}) => {
  return (
    <div className="hotel-card">
      <Link to={`Details/${id}`} key={idx}>
        <h3>{name}</h3>
        <img src={image} alt="{name}" />
      </Link>
    </div>
  );
}

export default HotelCard;
