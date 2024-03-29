import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../utils/yupSchema";
import axios from "axios";
import { AUTH_URL } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../utils/context";

const LoginForm = ({ closeLogin }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  // YUP
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Login function, accepts data from YUP object
  const loginUser = async (formData) => {
    const responseData = await axios.post(AUTH_URL, {
      // use YUP Object data as request body
      identifier: formData.email,
      password: formData.password,
    });

    console.log("Response Data: ", responseData);

    // Save JWT response to localstorage
    setAuth(responseData.data);
    // redirect to admin page
    closeLogin();
    navigate("/admin");
    alert("successfully logged in");
  };

  // handleSubmit
  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    loginUser(formData).catch(console.error);
    console.log(auth);
  };

  return (
    <div className="loginBackground">
      <div className="loginContainer">
        <div className="closeBtnContainer">
          <button
            className="closeBtn"
            onClick={() => {
              closeLogin(false);
            }}
          >
            &times;
          </button>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
            {...register("email")}
            placeholder="Your email..."
          />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}
          <label>Password</label>
          <input
            style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
            {...register("password")}
            type="password"
            placeholder="Your password..."
          />
          {errors.password && (
            <span className="form-error">{errors.password.message}</span>
          )}
          <button className="Btn" style={{ marginLeft: "0" }}>
            Login
          </button>
        </form>
        <div className="closeBtnContainer">
          <button
            style={{
              background: "none",
              border: "none",
              marginTop: "1rem",
            }}
            onClick={() => {
              closeLogin(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
