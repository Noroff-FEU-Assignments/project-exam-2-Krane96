const MessageItem = ({ email, name, message }) => {
    return (
      <div className="info_container">
        <div className="sender_info">
          <h5><span>From: </span>{name}</h5>
          <h5><span>Email: </span>{email}</h5>
          <div>
          <h5><span>Message:</span></h5>
          <p className="sender_message">{message}</p>
          </div>
        </div>
        
      </div>
    );
  }

  export default MessageItem;