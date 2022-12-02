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
  border-bottom-color: ${({ isValid }) =>
    isValid ? 'var(--color-font)' : 'var(--color-error)'};
`;

export const Label = styled.label`
  padding: 6px 0;
  font-weight: 700;
`;

export const ErrorMessage = styled.p<{
  isValid: boolean;
}>`
  font-style: italic;
  font-weight: 300;
  color: var(--color-error);
`;

const StyledFormInput = styled.form<{
  mt?: string;
  mb?: string;
}>``;

export default StyledFormInput;
