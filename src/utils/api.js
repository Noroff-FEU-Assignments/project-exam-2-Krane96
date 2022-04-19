import axios from "axios";

export const BASE_URL = "https://hotel-strapi-exam.herokuapp.com/";
export const AUTH_URL = `${BASE_URL}api/auth/local`;
export const HOTELS_URL = `${BASE_URL}api/hotels`;
export const POPULATE = "?populate=*";

export const AUTH_PATH = "api/auth/local";
export const BOOKINGS_PATH = "api/bookings";

export const getData = (url) => {
  axios.get(url).then((response) => console.log(response.data.data));
};

export const getHotels = getData( HOTELS_URL + POPULATE);
