const BookingItem = ({ name, hotel, CheckInDate, CheckOutDate }) => {
    return (
      <div className="booking_container">
        <div className="booking_info">
          <h4>{hotel}</h4>
          <h5>{name}</h5>
        </div>
        <div className="booking_dates">
        <p>{CheckInDate}</p>
        <p>{CheckOutDate}</p>
        </div>
      </div>
    );
  }

  export default BookingItem;