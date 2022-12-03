import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Container, Input, Label, ErrorMessage } from './FormInput.styled';

interface FormInputProps {
  id: string;
  inputName: Path<FieldValues>;
  label: string;
  isValid: boolean;
  isTouched: boolean;
  errorText: string;
  register: UseFormRegister<any>;
  type: string;
  width?: string;
  mt?: string;
  mb?: string;
}

function FormInput({
  errorText,
  id,
  inputName,
  isValid,
  label,
  mt,
  mb,
  register,
  type,
  width,
}: FormInputProps) {
  return (
    <Container mt={mt} mb={mb}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...register(inputName)}
        isValid={isValid}
        id={id}
        type={type}
        width={width}
      />
      {!isValid && errorText && (
        <ErrorMessage isValid={isValid}>{errorText}</ErrorMessage>
      )}
    </Container>
  );
}

export default FormInput;
