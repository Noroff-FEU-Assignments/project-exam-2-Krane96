import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../../utils/api";
import { motion } from "framer-motion";
import axios from "axios";
import { TabTitle } from "../../../utils/TitleAndIcon";
import { ContactSchema } from "../../../utils/yupSchema";
import { useNavigate } from "react-router-dom";
const url = BASE_URL + "api/messages";




const Contact = () => {
  TabTitle("Holidaze | Contact");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSend = async (data) => {
    const options = {
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    };
    const responseData = await axios.post(url, options);
    console.log(responseData);
    navigate("/SuccessContact");
  };

  return (
    <motion.div
      initial={false}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      
      <form onSubmit={handleSubmit(onSend)} className="form_basic">
        <h2 style={{ marginBottom: ".5rem" }}>Contact us</h2>
        <fieldset>
          <label>Name</label>
          <input
            {...register("name")}
            placeholder="Name"
            className="form-info"
          />
          {errors.name && (
            <span className="form-error">{errors.name.message}</span>
          )}
          <label>Email</label>
          <input
            {...register("email")}
            placeholder="Email"
            className="form-info"
          />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}
          <label>Your message</label>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="form-message"
          />
          {errors.message && (
            <span className="form-error">{errors.message.message}</span>
          )}
          {isSubmitSuccessful && (
            <span className="form_success">Success</span>
          )}
          <button className="Btn">Send</button>
        </fieldset>
      </form>
    </motion.div>
  );
};

export default Contact;
