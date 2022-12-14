import * as yup from 'yup';

const phoneValidation = /^\d{9}$/;

const valdationSchema = yup.object().shape({
  login: yup.string().required('Login jest wymagany'),
  password: yup.string().required('Hasło jest wymagane'),
  email: yup
    .string()
    .email('Nieprawidłowy format adresu e-mail')
    .required('Adres e-mail jest wymagany'),
  phone: yup
    .string()
    .required('Numer telefonu jest wymagany')
    .matches(phoneValidation, 'Nieprawidłowy numer telefonu'),
  isAccepted: yup.bool().oneOf([true], 'Wymagana akceptacja regulaminu'),
});

export default valdationSchema;
