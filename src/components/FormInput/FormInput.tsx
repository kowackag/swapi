import React, { useState } from 'react';

import StyledFormInput, {
  Input,
  Label,
  ErrorMessage,
} from './FormInput.styled';

interface FormInputProps {
  onChange: () => void;
  id: string;
  value: string;
  label: string;
  isValid: boolean;
  errorText: string;
  type: string;
  width: string;
  mt: string;
}

function FormInput({
  errorText,
  id,
  isValid,
  label,
  mt,
  onChange,
  type,
  value,
  width,
}: FormInputProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClick = (): void => {
    if (isClicked === false) setIsClicked(true);
  };

  return (
    <StyledFormInput mt={mt}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        onChange={onChange}
        value={value}
        onClick={onClick}
        isValid={isValid}
        isClicked={isClicked}
        id={id}
        type={type}
        width={width}
      />
      {!isValid && errorText && (
        <ErrorMessage isValid={isValid}>{errorText}</ErrorMessage>
      )}
    </StyledFormInput>
  );
}

export default FormInput;
