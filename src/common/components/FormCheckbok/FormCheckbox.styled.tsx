import styled from 'styled-components';

export const Input = styled.input<{
  isValid: boolean;
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  display: inline-block;
  width: 29px;
  height: 29px;
  margin-right: 21px;
  border: none;
  outline: none;
  vertical-align: middle;

  &::after {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    border-style: solid;
    border-width: 3px;
    border-radius: 3px;
    border-color: ${({ isValid }) =>
      isValid ? 'var(--color-font)' : 'var(--color-error)'};
    background-color: white;
    vertical-align: middle;
  }

  &:checked::after {
    content: url('icons/yes.svg');
  }
`;

export const Label = styled.label`
  padding: 6px 0;
  margin-bottom: 18px;
  font-weight: 700;
  vertical-align: middle;
`;

export const ErrorMessage = styled.p<{
  isValid: boolean;
}>`
  display: inline-block;
  padding-left: 30px;
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
