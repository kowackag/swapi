import React from 'react';

interface ProfileData {
  name: string;
  created: string;
  vehicles: string[] | [];
}

type ProfileContextType = {
  avatarProfileList: ProfileData[] | [];
  setAvatarProfileList: React.Dispatch<
    React.SetStateAction<ProfileData[] | []>
  >;
};

const iProfileContextState = {
  avatarProfileList: [],
  setAvatarProfileList: () => {},
};

const ProfileListContext =
  React.createContext<ProfileContextType>(iProfileContextState);

export { ProfileListContext };
