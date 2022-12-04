import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'common/components/Button/Button';
import StyledAvatarHeader, { Name } from './AvatarHeader.styled';

import { Paths } from 'common/constants/paths';

const AvatarHeader = () => {
  return (
    <StyledAvatarHeader>
      <Name>Małgorzata Kowacka</Name>
      <Link to={Paths.REGISTER}>
        <Button
          bgc="var(--color-grey)"
          width="236px"
          value="formularz rejestracyjny"
        />
      </Link>
    </StyledAvatarHeader>
  );
};

export default AvatarHeader;
