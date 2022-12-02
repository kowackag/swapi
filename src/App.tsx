import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Paths } from 'common/constants/paths';
import Avatar from 'views/Avatar';
import Register from 'views/Register';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace to={Paths.AVATAR_PROFILE} />}
      />
      <Route path={Paths.AVATAR_PROFILE} element={<Avatar />} />
      <Route path={Paths.REGISTER} element={<Register />} />
    </Routes>
  );
}

export default App;
