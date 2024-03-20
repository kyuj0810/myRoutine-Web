import styled from 'styled-components';
import { darkModeVar } from '../apollo';

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Containter = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

function Login() {
  return (
    <Containter>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </Containter>
  );
}

export default Login;
