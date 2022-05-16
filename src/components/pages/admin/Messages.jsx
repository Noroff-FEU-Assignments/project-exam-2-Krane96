
import AdminMessages from "../../admin_items/messages/AdminMessages";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../../admin_items/AdminDashboard";

const Messages = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/admin");
  }
  return (
    <>
    <AdminDashboard />
      <AdminMessages />
    </>
  );
}
export default Messages;