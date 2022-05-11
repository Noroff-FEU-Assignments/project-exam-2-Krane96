import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL, HOTELS_URL } from "../../../utils/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import AdminDashboard from "../AdminDashboard";

const schema = yup.object().shape({
  name: yup.string().required("Please enter establishment name"),
  address: yup.string().required("Please enter address"),
  description: yup
    .string()
    .required("Please enter description")
    .min(10, "Description must be at least 10 characters!"),
  type: yup.string().required("Please establishment type"),
  price: yup.string().required("Please enter price"),
});

const CreateForm =() =>{
  const [files, setFiles] = useState();
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

  async function createEstablishment(data) {
    setSubmitting(true);

    const formData = new FormData();
    

    const resp = await axios.post(HOTELS_URL, data);
    navigate("/MessageSent");
  }

  return (
      <>
    <AdminDashboard/>
    <form onSubmit={handleSubmit(createEstablishment)} className="contactForm">
      <fieldset disabled={submitting}>
        <input
          {...register("name")}
          placeholder="Name"
          className="form-info block"
        />
        {errors.name && (
          <span className="form-error block">{errors.name.message}</span>
        )}
        <input
          {...register("address")}
          placeholder="Address"
          className="form-info block"
        />
        {errors.address && (
          <span className="form-error block">{errors.address.message}</span>
        )}
        <input
          {...register("type")}
          placeholder="Type (Hotel, Lodge, Spa...)"
          className="form-info block"
        />
        {errors.type && (
          <span className="form-error block">{errors.type.message}</span>
        )}
        <input
          {...register("price")}
          placeholder="Price"
          className="form-info block"
        />
        {errors.price && (
          <span className="form-error block">{errors.price.message}</span>
        )}
        <textarea
          {...register("description")}
          placeholder="Description"
          className="form-message block"
        />
        {errors.description && (
          <span className="form-error block">{errors.description.message}</span>
        )}
        <button className="Btn">Send</button>
      </fieldset>
    </form>
    </>
  );
}

export default CreateForm;