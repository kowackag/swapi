import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import FormInput from 'components/FormInput/FormInput';

// interface UserDataTypes {
//   login: string;
//   password: string;
//   email: string;
//   phone: string;
// }

const RegisterForm = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     setValue,
  //     formState: { errors, isValid, touchedFields },
  //   } = useForm<FieldValues>({
  //     resolver: '',
  //     mode: 'all',
  //     defaultValues: {
  //       login: '',
  //       password: '',
  //       email: 'woman',
  //       phone: '',
  //     },
  //   });

  //   const handleSubmit = ( e: MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //   }

  return (
    <div>
      <FormInput
        // onSubmit={handleSubmit}
        id="login"
        label="Login:"
        type="text"
        // isValid={!errors.login}
        // register={register}
        // touched={touchedFields.login}
        // errorText={errors.login?.message}
        mt="35px"
      />
    </div>
  );
};

export default RegisterForm;
