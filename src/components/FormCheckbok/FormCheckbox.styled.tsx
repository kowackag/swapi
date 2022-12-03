import styled from 'styled-components';

export const Input = styled.input<{
  isValid: boolean;
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  width: 29px;
  height: 29px;
  margin-right: 21px;
  display: inline-block;
  border: none;
  outline: none;
  vertical-align: middle;

  &::after {
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    content: '';
    border-style: solid;
    border-width: 3px;
    border-radius: 3px;
    background-color: white;
    border-color: ${({ isValid }) =>
      isValid ? 'var(--color-font)' : 'var(--color-error)'};
    font-size: 1.6rem;
  }

  &:checked::after {
    display: inline-block;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    content: url('icons/yes.svg');
    border-style: solid;
    border-width: 3px;
    border-radius: 3px;
    background-color: white;
    border-color: var(--color-font);
    font-size: 1.6rem;
  }
`;

export const Label = styled.label`
  vertical-align: middle;
  padding: 6px 0;
  margin-bottom: 18px;
  font-weight: 700;
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
  mt?: string;
  mb?: string;
}>`
  position: relative;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`;
