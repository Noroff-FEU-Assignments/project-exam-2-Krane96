import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";



function FeaturedCard({ id, name }) {
	return (
		<>
        <Link to={`../details/${id}`}>
      <div className="hotel-featured-card">
			<img src="/images/hotel/quality-1.jpg"></img>
			<h4>{name}</h4>
      </div>
		</Link>
        </>
	);
}

export default FeaturedCard;