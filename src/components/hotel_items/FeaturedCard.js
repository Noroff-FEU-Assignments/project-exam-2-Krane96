import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function FeaturedCard({ id, name, image_url }) {
  return (
    <>
      <Link to={`../details/${id}`}>
        <div className="hotel-featured-card">
          <img src={image_url} />
          <h4>{name}</h4>
        </div>
      </Link>
    </>
  );
}

export default FeaturedCard;
