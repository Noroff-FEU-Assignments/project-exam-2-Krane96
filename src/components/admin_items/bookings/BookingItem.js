const BookingItem = ({ name, hotel, CheckInDate, CheckOutDate }) => {
    return (
      <div className="booking_container">
        <div className="booking_info">
          <h3>{name}</h3>
          <h4>{hotel}</h4>
        </div>
        <p>{CheckInDate}</p>
        <p>{CheckOutDate}</p>
      </div>
    );
  }

  export default BookingItem;