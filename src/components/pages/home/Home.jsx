import { Link } from "react-router-dom";
import AuthContext from "../../../utils/context";
import { useState, useEffect, useContext, useRef } from "react";
import { HOTELS_URL } from "../../../utils/api";
import HotelCard from "../../hotel_items/HotelCard"
import SearchBar from "../../search/SearchBar";
import { TabTitle } from "../../../utils/TitleAndIcon";

const Home = () => {
  TabTitle('Holidaze');
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    //setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(function () {
    const fetchData = async () => {
      try {
        const response = await fetch(HOTELS_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setHotel(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <SearchBar />
          {hotel.map(function (hotel, idx) {
            const { name, image_url } = hotel.attributes;
            return (
              <HotelCard
                key={idx}
                id={hotel.id}
                name={name}
                image_url={image_url}
              />
            );
          })}
      
      <div className="contact_hero">
        <div className="contact_hero_content">
          <h2>Any questions?</h2>
          <div className="action_Btn">
            <Link to="/contact">Ask us here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/* 

      */
