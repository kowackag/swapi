import styled from 'styled-components';

export const Box = styled.div`
  border-radius: 500px 60px 300px 100px;
  width: 800px;
  height: 740px;
  background-color: var(--color-avatar);
  margin: auto;
  margin-bottom: 30px;
  position: relative;
  box-shadow: 12px 4px 4px rgba(0, 0, 0, 0.6);
`;

export const Name = styled.h2`
  min-width: 330px;
  font-size: 5rem;
  font-weight: 800;
  text-align: center;
`;

export const Container = styled.div`
  position: relative;
  width: 534px;
  margin: auto;
`;

export const IconBox = styled.div`
  display: inline-block;
  width: 115px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

const StyledStarWars = styled.div`
  margin-top: 86px;
  margin-right: 28px;
`;

export default StyledStarWars;
