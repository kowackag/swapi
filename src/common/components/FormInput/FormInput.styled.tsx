import styled from 'styled-components';

export const Input = styled.input<{
  isValid: boolean;
}>`
  display: block;
  width: 100%;
  padding: 12px 0;
  border: none;
  outline: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ isValid }) =>
    isValid ? 'var(--color-font)' : 'var(--color-error)'};
  font-size: 2rem;
  &:-webkit-autofill {
    font-size: 2rem;
    box-shadow: inset 30px 30px 0 #fff, inset -30px -30px 0 #fff;
    -webkit-text-fill-color: var(--color-font) !important;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  padding: 8px 0;
  font-weight: 700;
  line-height: 165%;
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
  mb?: string;
  mt?: string;
}>`
  position: relative;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`;
