import { useState, useEffect } from "react";
import { HOTELS_URL } from "../../utils/api";
import axios from "axios";
import HotelSearchCard from "../hotel_items/HotelSearchCard";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [hotels, setHotels] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadHotels = async () => {
      const response = await axios.get(HOTELS_URL);
      setHotels(response.data.data);
    };
    loadHotels();
  }, []);
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = hotels.filter((hotel) => {
        const regex = new RegExp(`${text}`, "gi");
        return hotel.attributes.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <>
      <div className="search_bar_container">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
          placeholder="Find your next stay"
        ></input>
        <AiOutlineSearch />
      </div>
      <div className="search_wrap">
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <div key={i} className="hotel_search_wrapper">
              <HotelSearchCard
                id={suggestion.id}
                name={suggestion.attributes.name}
                image_url={suggestion.attributes.image_url}
                price={suggestion.attributes.price}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchBar;

/* */
