import React from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";


function HotelCard({ id, name }) {
	return (
		<Link to={`../details/${id}`}>
      <div className="hotel-featured-card">
			<img src="/images/hotel/quality-1.jpg"></img>
      <p>4/5 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></p>
			<h4>{name}</h4>
      </div>
		</Link>
	);
}

export default HotelCard;
