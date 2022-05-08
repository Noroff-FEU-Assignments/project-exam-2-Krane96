import AdminBookings from "../../admin_items/AdminBookings";
import { useNavigate } from "react-router-dom";

const Bookings = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/admin");
  }
  return (
    <>
      <AdminBookings />
    </>
  );
}
export default Bookings;