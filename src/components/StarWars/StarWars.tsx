import React, { useCallback, useEffect, useState } from 'react';

import Button from 'components/Button/Button';
import Image from 'components/Image/Image';

import StyledStarWars, {
  Box,
  Name,
  IconBox,
  Container,
} from './StarWars.styled';

import { getProfile } from 'api/DataAPI';

interface AvatarDataType {
  name: string;
  created: string;
  vehicles: string[] | [];
  eye_color: string;
  age: string;
}

const StarWars = () => {
  const [avatarNumber, setAvatarNumber] = useState(1);
  const initAvatarData = {
    name: '',
    created: '',
    vehicles: [],
    eye_color: '',
    age: '',
  };
  const [avatarData, setAvatarData] = useState<AvatarDataType>(initAvatarData);
  const [starWarsData, setStarWarsData] = useState<AvatarDataType[] | []>([]);

  const addProfile = useCallback((): any => {
    avatarData && setStarWarsData([...starWarsData, avatarData]);
  }, [setStarWarsData, starWarsData, avatarData]);

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
            age: profileData.birth_year,
          });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [avatarNumber]);

  console.log(avatarData);
  console.log(starWarsData);
  return (
    <StyledStarWars>
      <Box>
        <Image
          src="https://picsum.photos/534/383"
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
