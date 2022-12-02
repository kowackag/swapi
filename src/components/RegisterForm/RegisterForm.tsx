import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from 'components/FormInput/FormInput';
import { Form } from './RegisterForm.styled';
import valdationSchema from './valdationSchema';

interface UserDataTypes {
  login: string;
  password: string;
  email: string;
  phone: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FieldValues>({
    resolver: yupResolver(valdationSchema),
    mode: 'all',
    defaultValues: {
      login: '',
      password: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data: UserDataTypes) => {
    console.log(data);
    return data;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id="login"
        inputName="login"
        label="Login:"
        type="text"
        isValid={!errors.login}
        register={register}
        isTouched={touchedFields.login}
        errorText={errors.login?.message}
        mb="24px"
      />
      <FormInput
        id="password"
        inputName="password"
        label="Hasło:"
        type="password"
        isValid={!errors.password}
        register={register}
        isTouched={touchedFields.password}
        errorText={errors.password?.message}
        mb="24px"
      />
      <FormInput
        id="email"
        inputName="email"
        label="E-mail:"
        type="text"
        isValid={!errors.email}
        register={register}
        isTouched={touchedFields.email}
        errorText={errors.email?.message}
        mb="24px"
      />
      <FormInput
        id="phone"
        inputName="phone"
        label="Numer telefonu:"
        type="text"
        isValid={!errors.phone}
        register={register}
        isTouched={touchedFields.phone}
        errorText={errors.phone?.message}
        mb="24px"
      />
      <input type="submit" value="send"/>
    </Form>
  );
};

export default RegisterForm;
