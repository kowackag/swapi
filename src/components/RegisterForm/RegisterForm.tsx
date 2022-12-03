import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from 'components/FormInput/FormInput';

import valdationSchema from './valdationSchema';

interface UserDataTypes {
  login: string;
  password: string;
  email: string;
  phone: string;
  isAccept: boolean;
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
      isAccept: false,
    },
  });

  const onSubmit = (data: UserDataTypes) => {
    console.log(data);
    return {
      login: data.login,
      password: data.password,
      email: data.email,
      phone: data.phone,
      isAccept: data.isAccept,
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <FormInput
        id="agree"
        inputName="agree"
        label="Akceptuję Regulamin:"
        type="checkbox"
        isValid={!errors.isAccept}
        register={register}
        isTouched={touchedFields.isAccept}
        errorText={errors.isAccept?.message}
        mb="24px"
      />
      <input type="submit" value="zapisz" />
    </form>
  );
};

export default RegisterForm;
