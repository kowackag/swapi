import Button from 'components/Button/Button';
import React from 'react';
import { Box } from './StarWars.styled';

const StarWars = () => {
  return (
    <>
      <Box></Box>
      <Button
        value="next profiles"
        // onClick={onSubmit}
        bgc="var(--color-green)"
        width="224px"
        margin="auto"
      />
    </>
  );
};

export default StarWars;
