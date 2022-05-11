import { useState, useEffect } from "react";
import { HOTELS_URL } from "../../utils/api";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import HotelCard from "../hotel_items/HotelCard";

const SearchBar = () => {
  const [hotels, setHotels] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
 
  useEffect(() => {
    const loadHotels = async() => {
      const response = await axios.get(HOTELS_URL);
      console.log(response.data.data);
      setHotels(response.data.data)
    }
  loadHotels();
   
  }, [])
  const onChangeHandler = (text) =>{
    let matches = [];
    if(text.length>0) {
      matches = hotels.filter(hotel=> {
        const regex = new RegExp(`${text}`, "gi")
        return hotel.attributes.name.match(regex)
      })
    }
    console.log('matches', matches);
    setSuggestions(matches)
    setText(text);
  }

  return (
    <>
    <input type="text"
    onChange={e=>onChangeHandler(e.target.value)}
    value={text}
    />
    {suggestions && suggestions.map((suggestion, i)=>
    
    <div key={i} className="hotel_card_search">
      <HotelCard
                id={suggestion.id}
                name={suggestion.attributes.name}
                image_url={suggestion.attributes.image_url}
              />
    </div>
    )}
    </>
  );
};

export default SearchBar;


/* */