import React from 'react';
import StyledButton from './Button.styled';

interface ButtonProps {
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bgc: string;
  width: string;
  margin?: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({ value, onClick, bgc, width, margin, type }: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      bgc={bgc}
      width={width}
      margin={margin}
      type={type}
    >
      {value}
    </StyledButton>
  );
};

export default Button;