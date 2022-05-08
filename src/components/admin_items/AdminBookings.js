import { useState, useEffect } from "react";
import { BASE_URL, BOOKINGS_PATH } from "../../utils/api";
import MessageItem from "./MessageItem";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../utils/context";
import { useContext } from 'react';
import AdminDashboard from "./AdminDashboard";
import useToggle from "../../hooks/useToggle";

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
          <h1>You must be Authenticated to view this page</h1>
          <h3>The server responded with: {error.status}</h3>
          <p>{error.message}</p>
          <p>Please Login</p>
        </div>
      );
    }
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <AdminDashboard/>
        <hr />
        <h2>Bookings</h2>
          {bookings.map((item, idx) => {
            const deleteBooking = async () => {
              const responseData = await http.delete(
                `${BOOKINGS_PATH}/${item.id}`
              );
              console.log(responseData);
            };
  
            const handleDelete = () => {
              if (window.confirm('Are you sure?')) {
                deleteBooking();
                setIsTriggered();
              } else {
                return;
              }
            };
            return (
                <div key={idx}>
                <h3>{item.attributes.hotel}</h3>
                <h4>{item.attributes.name}</h4>
                <button className='defaultBtn' onClick={handleDelete}>
                  DELETE
                </button>
                </div>
            );
          })}
        
      </div>
    );
  };
  
  export default AdminBookings;