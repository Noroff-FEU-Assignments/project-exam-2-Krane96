import CreateForm from "../../admin_items/create_booking/CreateForm";
import { useNavigate } from "react-router-dom";

const CreateBooking = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/admin");
  }
  return (
    <>

      <CreateForm />
    </>
  );
}
export default CreateBooking;