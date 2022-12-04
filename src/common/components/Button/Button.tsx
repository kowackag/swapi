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

const Button = ({ bgc, onClick, margin, type, width, value }: ButtonProps) => {
  return (
    <StyledButton
      bgc={bgc}
      margin={margin}
      onClick={onClick}
      type={type}
      width={width}
    >
      {value}
    </StyledButton>
  );
};

export default Button;
