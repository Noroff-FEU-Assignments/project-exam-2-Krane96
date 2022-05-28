import { Link } from "react-router-dom";

function HotelSearchCard({ id, name, image_url, price }) {
  return (
    <Link to={`../details/${id}`}>
      <div className="hotel_card_search">
        <img src={image_url} alt="hotel" />
        <div className="search_card_row_one">
          <h4>{name}</h4>
          <p>{price} NOK</p>
        </div>
      </div>
    </Link>
  );
}

export default HotelSearchCard;
