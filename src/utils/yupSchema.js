import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter an email address')
    .email('Please enter a valid email address'),
  password: yup.string().required('Please enter your password'),
});

export const bookingSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name!")
    .min(3, "Name must be longer than 2 characters!"),
});

export const ContactSchema = yup.object().shape({
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