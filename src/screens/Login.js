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
import FormError from '../components/auth/FormError';

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' });
  const onSubmitValid = (data) => {
    // console.log(data);
  };

  return (
    <AuthLayout>
      <PageTitle title="Log in" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faCalendar} size="2x" />{' '}
          <span>My Routine</span>
        </div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register('username', {
              required: 'Username는 필수입력입니다.',
              minLength: {
                value: 5,
                message: 'Username는 5글자 이상 입력해주세요.',
              },
            })}
            hasError={Boolean(formState.errors?.username?.message)}
            type="text"
            placeholder="Username"
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register('password', {
              required: 'Password는 필수입력입니다.',
            })}
            hasError={Boolean(formState.errors?.password?.message)}
            type="password"
            placeholder="Password"
          />
          <FormError message={formState.errors?.password?.message} />
          <Button type="submit" value="Log in" disabled={!formState.isValid} />
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
