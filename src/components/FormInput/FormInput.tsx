import React, { useState } from 'react';
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
  isTouched,
  label,
  mt,
  mb,
  register,
  type,
  width,
}: FormInputProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClick = (): void => {
    if (isClicked === false) setIsClicked(true);
  };
console.log(isValid && !isTouched)
  return (
    <Container mt={mt} mb={mb}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...register(inputName)}
        onClick={onClick}
        isValid={isValid && !isTouched}
        isClicked={isClicked}
        id={id}
        type={type}
        width={width}
      />
      {!isValid && errorText && isTouched && (
        <ErrorMessage isValid={isValid && !isTouched}>{errorText}</ErrorMessage>
      )}
    </Container>
  );
}

export default FormInput;
