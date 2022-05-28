import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: yup.string().required("Please enter your password"),
});

export const createHotelSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter hotel name")
    .max(20, "Hotel name can not be longer than 20 characters"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .min(200, "Price must be more than 200 NOK")
    .required("This field is requried"),
  address: yup.string().required("Please enter the address"),
  description: yup
    .string()
    .required("Please enter a description")
    .max(150, "Description can not be longer than 150 characters"),
  image_url: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Please enter a correct image url"
    )
    .required("Please enter a correct image url"),
});
export const bookingSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Name must be longer than 2 characters")
    .max(20, "name can not be longer than 20 characters"),
  CheckInDate: yup.date().typeError("Please enter check in date"),
  CheckOutDate: yup
    .date()
    .typeError("Please enter check out date")
    .min(yup.ref("CheckInDate"), "Your end date can't be before check in date"),
});

export const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name!")
    .min(3, "Name must be longer than 2 characters!")
    .max(20, "name can not be longer than 20 characters"),
  email: yup
    .string()
    .required("Please enter an email address!")
    .email("Please enter a valid email address!"),
  message: yup
    .string()
    .required("Please enter your message!")
    .min(10, "The message must be at least 10 characters!")
    .max(150, "Message can not be longer than 150 characters"),
});
