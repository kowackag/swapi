import React from 'react';

import { AvatarContainer } from 'common/components/Containers/Container.styled';
import AvatarHeader from 'components/AvatarHeader/AvatarHeader';
import StarWars from 'components/StarWars/StarWars';

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarHeader />
      <StarWars />
    </AvatarContainer>
  );
};

export default Avatar;
