import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Paths } from 'common/constants/paths';

import { Container } from 'components/Containers/Container.styled';
import Avatar from 'views/Avatar';
import Register from 'views/Register';

const App = () => {
  return (
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
  );
};

export default App;
