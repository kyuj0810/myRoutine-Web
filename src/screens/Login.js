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

import PageTitle from '../components/PageTitle';
import { useForm } from 'react-hook-form';

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmitValid = (data) => {
    console.log('onSubmitValid');
    console.log(data);
  };
  const onSubmitInValid = (data) => {
    console.log('onSubmitInValid');
    console.log(data);
  };
  return (
    <AuthLayout>
      <PageTitle title="Log in" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faCalendar} size="2x" />{' '}
          <span>My Routine</span>
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInValid)}>
          <Input
            {...register('username', {
              required: 'Username is required.',
              validate: (currentValue) => currentValue.includes('potato'),
              minLength: 5,
            })}
            type="text"
            placeholder="Username"
          />
          <Input
            {...register('password', { required: 'Password is required.' })}
            type="password"
            placeholder="Password"
          />
          <Button type="submit" value="Log in" />
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
