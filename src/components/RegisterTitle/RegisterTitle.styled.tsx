import styled from 'styled-components';

export const Title = styled.h2`
  padding: 11px 0;
  font-size: 2rem;
  letter-spacing: 3px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Line = styled.span`
  display: inline-block;
  width: 166px;
  margin-top: 12px;
  border-bottom: 9px solid var(--color-blue);
  text-transform: uppercase;
`;

const StyledRegisterTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default StyledRegisterTitle;