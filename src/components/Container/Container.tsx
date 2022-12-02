import React from 'react';
import StyledContainer from './Container.styled';

interface ContainerProps {
  children: React.ReactElement;
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
