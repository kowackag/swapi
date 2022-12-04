import styled from 'styled-components';

const StyledButton = styled.button<{
  bgc: string;
  margin?: string;
  width: string;
}>`
  display: block;
  margin: ${({ margin }) => margin};
  padding: 9px 4px;
  width: ${({ width }) => width};
  border: none;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  background-color: ${({ bgc }) => bgc};
  font-size: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Lato', Verdana, sans-serif;
  font-style: italic;
  color: white;
  cursor: pointer;
`;
export default StyledButton;
