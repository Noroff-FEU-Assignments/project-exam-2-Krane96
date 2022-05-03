import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../../utils/api";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./Contact.scss";
import axios from "axios";
const url = BASE_URL + "api/messages";

const schema = yup.object().shape({
  author: yup
    .string()
    .required("Please enter your author!")
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

const Contact = (contactData) => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data.contactform = contactData;
    setSubmitting(true);

    try {
      const response = await axios.post(url, data.attributes);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
      <fieldset>
        <input
          {...register("author")}
          placeholder="Name"
          className="form-info"
        />
        {errors.author && (
          <span className="form-error">{errors.author.message}</span>
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
