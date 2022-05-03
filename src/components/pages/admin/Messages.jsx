
import MessagesList from "../../admin_items/AdminMessages";
import { useNavigate } from "react-router-dom";

const Messages = () =>{
  const navigate = useNavigate();
  function GoBack() {
    navigate("/admin");
  }
  return (
    <>
      <MessagesList />
    </>
  );
}
export default Messages;