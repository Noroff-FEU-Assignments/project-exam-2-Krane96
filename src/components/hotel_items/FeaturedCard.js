import { Link } from "react-router-dom";

function FeaturedCard({ id, name, image_url }) {
  return (
    <>
      <Link to={`../details/${id}`}>
        <div className="hotel_featured_card">
          <img src={image_url} />
          <h3>{name}</h3>
        </div>
      </Link>
    </>
  );
}

export default FeaturedCard;
