import CreateForm from "../../admin_items/create_booking/CreateForm";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../../admin_items/AdminDashboard";

const CreateBooking = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/admin");
  }
  return (
    <>
      <AdminDashboard/>
      <CreateForm />
    </>
  );
}
export default CreateBooking;