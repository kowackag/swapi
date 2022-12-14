import React, { useCallback, useContext, useEffect, useState } from 'react';

import Button from 'common/components/Button/Button';
import Image from 'common/components/Image/Image';

import StyledStarWars, {
  Box,
  Container,
  IconBox,
  Name,
  Text,
} from './StarWars.styled';

import { getProfile } from 'services/DataAPI';
import { ProfileListContext } from 'services/context';

interface AvatarDataType {
  name: string;
  created: string;
  vehicles: string[] | [];
  eye_color: string;
  birthYear: string;
}

const StarWars = () => {
  const [avatarNumber, setAvatarNumber] = useState(1);
  const [avatarData, setAvatarData] = useState<AvatarDataType>();

  const { avatarProfileList, setAvatarProfileList } =
    useContext(ProfileListContext);

  const addProfile = useCallback(() => {
    avatarData &&
      setAvatarProfileList([
        ...avatarProfileList,
        {
          name: avatarData?.name,
          created: avatarData?.created,
          vehicles: avatarData?.vehicles,
        },
      ]);
  }, [setAvatarProfileList, avatarProfileList, avatarData]);

  const getNextProfile = () => {
    let number: number = avatarNumber;
    setAvatarNumber(++number);
  };

  const handleOnClick = () => {
    addProfile();
    getNextProfile();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const profileData = await getProfile(avatarNumber);
        profileData &&
          setAvatarData({
            name: profileData.name,
            created: profileData.created,
            vehicles: profileData.vehicles,
            eye_color: profileData.eye_color,
            birthYear: profileData.birth_year,
          });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [avatarNumber]);

  useEffect(() => {
    avatarData &&
      avatarProfileList.length === 0 &&
      setAvatarProfileList([
        {
          name: avatarData?.name,
          created: avatarData?.created,
          vehicles: avatarData?.vehicles,
        },
      ]);
  }, [avatarData, avatarProfileList.length, setAvatarProfileList]);

  return (
    <StyledStarWars>
      <Box>
        <Image
          src={`https://picsum.photos/534/383/?${avatarNumber}`}
          margin="140px 0 0 144px"
          width="534px"
          height="383px"
          radius="200px 20px 100px 50px"
          objectFit="cover"
        />
        <Container>
          <Name>{avatarData && avatarData.name}</Name>
          <IconBox>
            <img src="icons/avatar.svg" alt="avatar-icon" />
            <img src="icons/checkbox-green.svg" alt="checkbox accept" />
          </IconBox>
        </Container>
        <Container>
          <Text> birth year: {avatarData && avatarData.birthYear}</Text>
          <Text> eye color: {avatarData && avatarData.eye_color}</Text>
        </Container>
      </Box>
      <Button
        value="next profiles"
        onClick={handleOnClick}
        bgc="var(--color-green)"
        width="224px"
        margin="auto"
      />
    </StyledStarWars>
  );
};

export default StarWars;
