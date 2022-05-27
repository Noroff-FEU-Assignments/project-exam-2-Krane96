import { Link } from "react-router-dom";

function FeaturedCard({ id, name, price }) {
  return (
    <>
      <Link to={`../details/${id}`}>
        <div className="hotel_featured_card">
          <div className="featured_card_price">
            <p>{price} NOK</p>
          </div>
          <div className="featured_card_name">
            <h2>{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default FeaturedCard;
