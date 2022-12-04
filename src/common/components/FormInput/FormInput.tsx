import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Container, Input, Label, ErrorMessage } from './FormInput.styled';

interface FormInputProps {
  errorText: string;
  id: string;
  inputName: Path<FieldValues>;
  isValid: boolean;
  label: string;
  mb?: string;
  mt?: string;
  register: UseFormRegister<any>;
  type: string;
  width?: string;
}

function FormInput({
  errorText,
  id,
  inputName,
  isValid,
  label,
  mb,
  mt,
  register,
  type,
  width,
}: FormInputProps) {
  return (
    <Container mb={mb} mt={mt}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...register(inputName)}
        id={id}
        isValid={isValid}
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
