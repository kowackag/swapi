import React from 'react';
import StyledButton from './Button.styled';

interface ButtonProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  bgc: string;
  width: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({ value, onClick, bgc, width, type }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} bgc={bgc} width={width} type={type}>
      {value}
    </StyledButton>
  );
};

export default Button;
