import styled from 'styled-components';

export const BaseBox = styled.div`
  background-color: white;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;
