import styled from 'styled-components';

export const BaseBox = styled.div`
  background-color: white;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

export const fatLink = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: rgb(142, 142, 142);
`;
