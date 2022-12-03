import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button/Button';
import StyledAvatarHeader, { Name } from './AvatarHeader.styled';

import { Paths } from 'common/constants/paths';

const AvatarHeader = () => {
  return (
    <StyledAvatarHeader>
      <Name>Małgorzata Kowacka</Name>
      <Link to={Paths.REGISTER}>
        <Button
          value="formularz rejestracyjny"
          // onClick={onSubmit}
          bgc="var(--color-grey)"
          width="224px"
        />
      </Link>
    </StyledAvatarHeader>
  );
};

export default AvatarHeader;
