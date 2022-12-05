import React, { useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from 'common/components/FormInput/FormInput';
import FormCheckbox from 'common/components/FormCheckbok/FormCheckbox';
import Button from 'common/components/Button/Button';

import valdationSchema from './valdationSchema';
import { ProfileListContext } from 'services/context';
import { saveData } from 'services/DataAPI';

const RegisterForm = () => {
  const { avatarProfileList } = useContext(ProfileListContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(valdationSchema),
    mode: 'all',
  });

  const onSubmit = handleSubmit((data) => {
    console.log({
      user_data: data,
      star_wars_data: avatarProfileList,
    });
    saveData({
      user_data: data,
      star_wars_data: avatarProfileList,
    });
    reset();
  });

  return (
    <form>
      <FormInput
        errorText={errors.login?.message}
        id="login"
        inputName="login"
        isValid={!errors.login}
        label="Login:"
        mb="24px"
        register={register}
        type="text"
      />
      <FormInput
        errorText={errors.password?.message}
        id="password"
        inputName="password"
        isValid={!errors.password}
        label="Hasło:"
        mb="24px"
        register={register}
        type="password"
      />
      <FormInput
        id="email"
        errorText={errors.email?.message}
        inputName="email"
        isValid={!errors.email}
        label="E-mail:"
        mb="24px"
        register={register}
        type="text"
      />
      <FormInput
        errorText={errors.phone?.message}
        id="phone"
        inputName="phone"
        isValid={!errors.phone}
        label="Numer telefonu:"
        mb="24px"
        register={register}
        type="tel"
      />
      <FormCheckbox
        errorText={errors.isAccepted?.message}
        id="isAccepted"
        inputName="isAccepted"
        isValid={!errors.isAccepted}
        label="Akceptuję Regulamin:"
        mb="28px"
        mt="36px"
        register={register}
        type="checkbox"
      />
      <Button
        bgc="var(--color-blue)"
        margin="auto"
        onClick={onSubmit}
        type="submit"
        width="224px"
        value="zapisz"
      />
    </form>
  );
};

export default RegisterForm;
