import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Container, Input, Label, ErrorMessage } from './FormCheckbox.styled';

interface FormCheckboxProps {
  id: string;
  inputName: Path<FieldValues>;
  label: string;
  isValid: boolean;
  errorText: string;
  register: UseFormRegister<any>;
  type: string;
  mt?: string;
  mb?: string;
}

function FormCheckbox({
  errorText,
  id,
  inputName,
  isValid,
  label,
  mt,
  mb,
  type,
  register,
}: FormCheckboxProps) {
  return (
    <Container mt={mt} mb={mb}>
      <Input {...register(inputName)} isValid={isValid} id={id} type={type} />
      <Label htmlFor={id}>{label}</Label>
      {!isValid && errorText && (
        <ErrorMessage isValid={isValid}>{errorText}</ErrorMessage>
      )}
    </Container>
  );
}

export default FormCheckbox;
