import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from 'components/FormInput/FormInput';
import Button from 'components/Button/Button';

import valdationSchema from './valdationSchema';
import FormCheckbox from 'components/FormCheckbok/FormCheckbox';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FieldValues>({
    resolver: yupResolver(valdationSchema),
    mode: 'all',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    return data;
  });

  return (
    <form>
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
      <FormCheckbox
        id="isAccepted"
        inputName="isAccepted"
        label="Akceptuję Regulamin:"
        type="checkbox"
        isValid={!errors.isAccepted}
        register={register}
        errorText={errors.isAccepted?.message}
        mb="24px"
      />
      <Button
        type="submit"
        value="zapisz"
        onClick={onSubmit}
        bgc="var(--color-blue)"
        width="224px"
      />
    </form>
  );
};

export default RegisterForm;
