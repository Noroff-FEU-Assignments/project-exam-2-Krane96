import AdminBookings from "../../admin_items/bookings/AdminBookings";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../../admin_items/AdminDashboard";

const Bookings = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/admin");
  }
  return (
    <>
      <AdminDashboard />
      <AdminBookings />
    </>
  );
}
export default Bookings;