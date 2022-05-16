const BookingItem = ({ name, hotel, CheckInDate, CheckOutDate }) => {
    return (
      <div className="info_container">
        <div className="booking_info">
          <h4>{hotel}</h4>
         <h5><span>Name: </span>{name}</h5>
        </div>
        <div className="booking_dates">
        <h5><span>Check In: </span>{CheckInDate}</h5>
        <h5><span>Check Out: </span>{CheckOutDate}</h5>
        </div>
      </div>
    );
  }

  export default BookingItem;