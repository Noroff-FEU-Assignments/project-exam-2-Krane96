import { useState, useEffect } from "react";
import { MESSAGES_URL } from "../../../utils/api";
import MessageItem from "./MessageItem";
import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../utils/context";
import { useContext } from "react";
import useToggle from "../../../hooks/useToggle";
import Moment from "react-moment";
import "moment-timezone";

const AdminMessages = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(MESSAGES_URL);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  
  if (error) {
    return (
      <div>
        <h1>You must be Authenticated see this</h1>
        <p>{error.message}</p>
        <p>Please Login</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loader_container">
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
      </div>
    );
  }

  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ width: "80%", margin: "2rem auto" }}>Messages</h2>
        <hr style={{ maxWidth: "1000px", margin: "auto" }} />
        <div className="grid_admin">
          {bookings.map((item, idx) => {
            const { name, email, message } = item.attributes;
            const deleteMessage = async () => {
              const responseData = await http.delete(
                `${MESSAGES_URL}/${item.id}`
              );
              console.log(responseData);
            };

            const handleDelete = () => {
              if (window.confirm("Are you sure?")) {
                deleteMessage();
                setIsTriggered();
                setTimeout(() => {
                  window.location.reload();
                }, 0);
                
              } else {
                return;
              }
            };
            return (
              <div key={idx} className="admin_items_wrapper">
                <MessageItem name={name} email={email} message={message} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    padding: ".5rem 0",
                  }}
                >
                  <span>
                    Sent at:{" "}
                    <Moment format="YYYY.MM.DD">
                      {item.attributes.createdAt}
                    </Moment>
                  </span>
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

export default AdminMessages;
