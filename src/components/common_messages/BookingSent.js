import { useNavigate } from "react-router";

const BookingSent = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/");
  }
  return (
    <div className="BookingSent">
      <span>Thank you for Booking</span>
      <button onClick={GoBack} className="BtnConfirm">
        Back to Home
      </button>
    </div>
  );
}

export default BookingSent;