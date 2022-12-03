import React, { useEffect, useState } from 'react';

import Button from 'components/Button/Button';
import Image from 'components/Image/Image';

import StyledStarWars, { Box, Name, IconBox, Container } from './StarWars.styled';

import { getAvatarFromAPI } from 'api/DataAPI';

const StarWars = () => {
  const [avatarNumber, setAvatarNumber] = useState(1);
  const [avatarData, setAvatarData] = useState();
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    getAvatarFromAPI(avatarNumber).then((resp) =>
      setAvatarData({
        name: resp.name,
        created: resp.created,
        vehicles: resp.vehicles,
      })
    );
  }, [avatarNumber]);

  useEffect(() => {
    setStarWarsData([avatarData]);
  }, [avatarData]);
  console.log(avatarData);
  console.log(starWarsData);
  return (
    <StyledStarWars>
      <Box>
        <Image
          src="https://i.picsum.photos/id/402/534/383.jpg?hmac=OzpWPbrBSzdnFhXAufE8RTNy-Ej_RUau9NRvccaLubA"
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
        onClick={() => setAvatarNumber(2)}
        bgc="var(--color-green)"
        width="224px"
        margin="auto"
      />
    </StyledStarWars>
  );
};

export default StarWars;
