import { useState, useEffect } from "react";
import { BASE_URL, MESSAGES_URL } from "../../../utils/api";
import MessageItem from "./MessageItem";
import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../utils/context";
import { useContext } from "react";
import AdminDashboard from "../AdminDashboard";
import useToggle from "../../../hooks/useToggle";

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
      <AdminDashboard />
      <hr />
      <h2>Messages</h2>
      {bookings.map((item, idx) => {
        const { name, email, message } = item.attributes;
        const deleteMessage = async () => {
          const responseData = await http.delete(`${MESSAGES_URL}/${item.id}`);
          console.log(responseData);
        };

        const handleDelete = () => {
          if (window.confirm("Are you sure?")) {
            deleteMessage();
            setIsTriggered();
          } else {
            return;
          }
        };
        return (
          <div key={idx} className="message_wrapper">
            <MessageItem name={name} email={email} message={message} />
            <button className="Btn" onClick={handleDelete}>
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AdminMessages;

/*
<AdminDashboard />
    <div className="messagesList">
      {Messages.map(function (messageItem) {
        const { id, name, email, message } = messageItem;
        return (
          <MessageItem key={id} name={name} email={email} message={message} />
        );
      })}
    </div>
    */