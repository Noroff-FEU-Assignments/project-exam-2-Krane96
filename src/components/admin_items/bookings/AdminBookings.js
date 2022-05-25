import { useState, useEffect } from "react";
import { BOOKINGS_PATH } from "../../../utils/api";
import BookingItem from "./BookingItem";
import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../utils/context";
import { useContext } from "react";
import useToggle from "../../../hooks/useToggle";
import Moment from 'react-moment';
import 'moment-timezone';
const AdminBookings = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(BOOKINGS_PATH);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  // if error object is populated, show user what happened and urge them to login
  if (error) {
    return (
      <div>
        <h1>You must be logged in to see this page</h1>
        <p>{error.message}</p>
        <p>Please Login</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <>
     <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ width: "80%", margin: "2rem auto" }}>Bookings</h2>
      <hr style={{maxWidth:"1000px",margin:"auto"}}/>
      <div className="grid_admin">
        {bookings.map((item, idx) => {
          const { name, hotel, CheckInDate, CheckOutDate } = item.attributes;
          const deleteBooking = async () => {
            const responseData = await http.delete(
              `${BOOKINGS_PATH}/${item.id}`
            );
            console.log(responseData);
          };

          const handleDelete = () => {
            if (window.confirm("Are you sure?")) {
              deleteBooking();
              setIsTriggered();
            } else {
              return;
            }
          };
          
          return (
            <div key={idx} className="admin_items_wrapper">
              <BookingItem
                name={name}
                hotel={hotel}
                CheckInDate={CheckInDate}
                CheckOutDate={CheckOutDate}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems:"flex-end" }}>
                <span>Made at: <Moment format="YYYY.MM.DD">{item.attributes.createdAt}</Moment></span>
                <button className="deleteBtn" onClick={handleDelete}>
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default AdminBookings;
