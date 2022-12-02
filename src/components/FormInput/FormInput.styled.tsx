import styled from 'styled-components';

export const Input = styled.input<{
  isValid: boolean;
  isClicked: boolean;
}>`
  display: block;
  width: 100%;
  padding: 6px 0;
  border: none;
  outline: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ isValid }) =>{ console.log(7, isValid)
   return isValid ? 'var(--color-font)' : 'var(--color-error)'}};
  font-size: 1.6rem;
`;

export const Label = styled.label`
  display: block;
  padding: 6px 0;
  margin-bottom: 18px;
  font-weight: 700;
`;

export const ErrorMessage = styled.p<{
  isValid: boolean;
}>`
  position: absolute;
  bottom: -30px;
  right: 0;
  font-style: italic;
  font-weight: 300;
  color: var(--color-error);
`;

export const Container = styled.div<{
  mt?: string;
  mb?: string;
}>`
  position: relative;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`;
