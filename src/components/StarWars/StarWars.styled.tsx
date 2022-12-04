import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 30px;
  width: 800px;
  height: 740px;
  background-color: var(--color-avatar);
  border-radius: 500px 60px 300px 100px;
  box-shadow: 12px 4px 4px rgba(0, 0, 0, 0.6);
`;

export const Name = styled.h2`
  margin: 22px 100px 10px;
  font-size: 4rem; // should be 5rem but it was too much in long name, looks better now
  line-height: 0.9;
  font-weight: 800;
  text-align: center;
`;

export const Container = styled.div`
  position: relative;
  margin: auto;
  width: 534px;
`;

export const Text = styled.div`
  margin: 0 100px;
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  color: grey;
`;

export const IconBox = styled.div`
  position: absolute;
  right: -6px;
  top: -6px;
  display: flex;
  justify-content: space-between;
  width: 115px;
`;

const StyledStarWars = styled.div`
  margin-top: 86px;
  margin-right: 28px;
`;

export default StyledStarWars;
