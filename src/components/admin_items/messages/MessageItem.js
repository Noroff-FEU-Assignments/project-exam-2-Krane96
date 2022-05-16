const MessageItem = ({ email, name, message }) => {
    return (
      <div className="info_container">
        <div className="sender_info">
          <h5><span>From: </span>{name}</h5>
          <h5><span>Email: </span>{email}</h5>
          <h5><span>Message: <br/></span>{message}</h5>
        </div>
        
      </div>
    );
  }

  export default MessageItem;