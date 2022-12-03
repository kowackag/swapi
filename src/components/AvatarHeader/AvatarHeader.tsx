import Button from 'components/Button/Button';
import React from 'react';
import StyledAvatarHeader, { Name } from './AvatarHeader.styled';

const AvatarHeader = () => {
  return (
    <StyledAvatarHeader>
      <Name>Małgorzata Kowacka</Name>

      <Button
        value="formularz rejestracyjny"
        // onClick={onSubmit}
        bgc="var(--color-grey)"
        width="224px"
      />
    </StyledAvatarHeader>
  );
};

export default AvatarHeader;
