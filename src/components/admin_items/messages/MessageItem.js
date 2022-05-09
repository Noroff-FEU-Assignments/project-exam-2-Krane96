const MessageItem = ({ email, name, message }) => {
    return (
      <div className="message_container">
        <div className="sender_info">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <p className="message">{message}</p>
      </div>
    );
  }

  export default MessageItem;