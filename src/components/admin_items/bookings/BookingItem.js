const BookingItem = ({ name, hotel, CheckInDate, CheckOutDate }) => {
    return (
      <div className="messageContainer">
        <div className="senderInfo">
          <p>{name}</p>
          <p>{hotel}</p>
        </div>
        <p>{CheckInDate}</p>
        <p>{CheckOutDate}</p>
      </div>
    );
  }

  export default BookingItem;