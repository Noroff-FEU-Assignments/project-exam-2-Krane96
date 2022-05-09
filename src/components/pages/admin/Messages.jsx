
import AdminMessages from "../../admin_items/messages/AdminMessages";
import { useNavigate } from "react-router-dom";

const Messages = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/admin");
  }
  return (
    <>
      <AdminMessages />
    </>
  );
}
export default Messages;