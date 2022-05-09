import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../../utils/yupSchema";
import axios from "axios";
import { AUTH_URL } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../utils/context";
import "./login.scss";

const LoginForm = ({ closeLogin }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  // YUP
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
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
    navigate("/admin");
  };

  // handleSubmit
  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    loginUser(formData).catch(console.error);
    console.log(auth);
    alert("successfully logged in")
  };

  // Render page
  return (
    <>
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
            {errors.email && <span>{errors.email.message}</span>}
            <label>Password</label>
            <input
              style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
              {...register("password")}
              type="password"
              placeholder="Your password..."
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button className="Btn">Login</button>
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
    </>
  );
};

export default LoginForm;
