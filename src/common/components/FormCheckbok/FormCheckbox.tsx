import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Container, Input, Label, ErrorMessage } from './FormCheckbox.styled';

interface FormCheckboxProps {
  errorText: string;
  id: string;
  inputName: Path<FieldValues>;
  isValid: boolean;
  label: string;
  mb?: string;
  mt?: string;
  register: UseFormRegister<any>;
  type: string;
}

function FormCheckbox({
  errorText,
  id,
  inputName,
  isValid,
  label,
  mb,
  mt,
  register,
  type,
}: FormCheckboxProps) {
  return (
    <Container mb={mb} mt={mt}>
      <Input {...register(inputName)} id={id} isValid={isValid} type={type} />
      <Label htmlFor={id}>{label}</Label>
      {!isValid && errorText && (
        <ErrorMessage isValid={isValid}>{errorText}</ErrorMessage>
      )}
    </Container>
  );
}

export default FormCheckbox;
