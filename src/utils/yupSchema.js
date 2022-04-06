import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter an email address')
    .email('Please enter a valid email address'),
  password: yup.string().required('Please enter your password'),
});

export const bookingSchema = yup.object().shape({
  title: yup.string().required('Please enter a title'),
  message: yup.string().required('Please provide a message'),
  contact: yup
    .string()
    .required('Please provide an email so we can contact you'),
});