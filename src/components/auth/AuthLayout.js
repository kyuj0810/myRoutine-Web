import styled from 'styled-components';

const Containter = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

function AuthLayout({ children }) {
  return (
    <Containter>
      <Wrapper>{children}</Wrapper>
    </Containter>
  );
}

export default AuthLayout;
