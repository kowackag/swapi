import React from 'react';
import RegisterTitle from 'components/RegisterTitle/RegisterTitle';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { RegisterContainer } from 'common/components/Containers/Container.styled';

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterTitle />
      <RegisterForm />
    </RegisterContainer>
  );
};

export default Register;
