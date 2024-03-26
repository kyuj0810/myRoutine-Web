import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import routes from '../routes';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/auth/Button';
import Separator from '../components/auth/Separator';
import Input from '../components/auth/Input';
import FormBox from '../components/auth/FormBox';
import BottomBox from '../components/auth/BottomBox';
import { useState } from 'react';

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const onUsernameChange = (event) => {
    setUsernameError('');
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '') {
      setUsernameError('not empty error');
    }
    if (username.length < 10) {
      setUsernameError('short error');
    }
    console.log(username);
  };
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faCalendar} size="2x" />{' '}
          <span>My Routine</span>
        </div>
        <p>{usernameError}</p>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={onUsernameChange}
            value={username}
            type="text"
            placeholder="Username"
          />
          <Input type="password" placeholder="Password" />
          <Button
            type="submit"
            value="Log in"
            disabled={username === '' || username.length < 10}
          />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta={"Don't have an account?"}
        link={routes.signUp}
        linkText={'Sign up'}
      ></BottomBox>
    </AuthLayout>
  );
}

export default Login;
