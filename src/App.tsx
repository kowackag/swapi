import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Paths } from 'common/constants/paths';
import { ProfileListContext } from 'services/context';

import { Container } from 'components/Containers/Container.styled';
import Avatar from 'views/Avatar';
import Register from 'views/Register';

interface AvatarProfileType {
  name: string;
  created: string;
  vehicles: string[] | [];
}

const App = () => {
  const [avatarProfileList, setAvatarProfileList] = useState<
    AvatarProfileType[] | []
  >([]);
  console.log(avatarProfileList);

  return (
    <ProfileListContext.Provider
      value={{ avatarProfileList, setAvatarProfileList }}
    >
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={Paths.AVATAR_PROFILE} />}
          />
          <Route path={Paths.AVATAR_PROFILE} element={<Avatar />} />
          <Route path={Paths.REGISTER} element={<Register />} />
        </Routes>
      </Container>
    </ProfileListContext.Provider>
  );
};

export default App;
