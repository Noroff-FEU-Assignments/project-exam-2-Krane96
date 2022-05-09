const MessageItem = ({ email, name, message }) => {
    return (
      <div className="messageContainer">
        <div className="senderInfo">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <p className="message">{message}</p>
      </div>
    );
  }

  export default MessageItem;