import { Link } from "react-router-dom";

const HotelCard = ({ name, image, id}) => {
  
  return (
    <div className="hotel-card">
      <Link to={`../../details/${id}`}>
        <h3>{name}</h3>
        <img src={image} alt="{name}" />
      </Link>
    </div>
  );
}

export default HotelCard;
