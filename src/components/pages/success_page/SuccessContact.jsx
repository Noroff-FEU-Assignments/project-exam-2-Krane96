import { useNavigate } from "react-router";

const SuccessContact = () => {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/contact");
  }
  return (
    <div className="success_container">
      <div className="success_card">
        <h1>Success!</h1>
      <h2>Your message has been sent</h2>
      <button onClick={GoBack} className="Btn">
        Go Back
      </button>
      </div>
    </div>
  );
}

export default SuccessContact;