import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../../utils/api";
import { useContext, useState } from "react";
import "./Contact.scss";
import axios from "axios";
import { TabTitle } from "../../../utils/TitleAndIcon";
const url = BASE_URL + "api/messages";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name!")
    .min(3, "Name must be longer than 2 characters!"),
  email: yup
    .string()
    .required("Please enter an email address!")
    .email("Please enter a valid email address!"),
  message: yup
    .string()
    .required("Please enter your message!")
    .min(10, "The message must be at least 10 characters!"),
});

const Contact = () => {
  TabTitle('Holidaze | Contact')
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit(onSend)} className="form_basic">
      <h2 style={{marginBottom:".5rem"}}>Contact us</h2>
      <fieldset disabled={submitting}>
        <input {...register("name")} placeholder="Name" className="form-info" />
        {errors.name && (
          <span className="form-error">{errors.name.message}</span>
        )}

        <input
          {...register("email")}
          placeholder="Email"
          className="form-info"
        />
        {errors.email && (
          <span className="form-error">{errors.email.message}</span>
        )}

        <textarea
          {...register("message")}
          placeholder="Message"
          className="form-message"
        />
        {errors.message && (
          <span className="form-error">{errors.message.message}</span>
        )}

        <button className="Btn">Send</button>
      </fieldset>
    </form>
  );
};

export default Contact;
