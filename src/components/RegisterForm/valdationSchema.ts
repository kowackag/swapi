import * as yup from 'yup';

const valdationSchema = yup.object().shape({
  login: yup.string().required('Login jest wymagane'),
  password: yup.string().required('Hasło jest wymagane'),
  email: yup.string().email().required('Nieprawidłowy format adresu e-mail'),
  phone: yup
    .string()
    // .typeError('Wpisana data nie jest poprawna')
    .required('Data urodzenia jest wymagana'),
});

export default valdationSchema;
