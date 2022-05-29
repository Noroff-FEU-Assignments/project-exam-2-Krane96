import { useNavigate } from "react-router";
const BookingSuccess = () => {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/");
  }
  return (
    <div className="success_container">
        <div className="success_card">
        <h1>Success!</h1>
        <h2>Your booking has been made</h2>
      <button onClick={GoBack} className="Btn">
        Go Back
      </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
