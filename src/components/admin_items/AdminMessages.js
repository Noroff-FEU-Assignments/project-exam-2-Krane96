import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/api";
import MessageItem from "./MessageItem";

const MessagesList = () =>{
  const [Messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const url = BASE_URL + "api/messages";
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.data.attributes.json();

          setMessages(json);
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
    return (
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="messagesList">
      {Messages.map(function (messageItem) {
        const { id, author, email, message, updated_at } = messageItem;
        return (
          <MessageItem
            key={id}
            name={author}
            email={email}
            message={message}
            time={updated_at}
          />
        );
      })}
    </div>
  );
}

export default MessagesList;