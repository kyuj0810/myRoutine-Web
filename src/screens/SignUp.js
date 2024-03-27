import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import routes from '../routes';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/auth/Button';
import Input from '../components/auth/Input';
import FormBox from '../components/auth/FormBox';
import BottomBox from '../components/auth/BottomBox';
import styled from 'styled-components';
import { fatLink } from '../components/shared';
import PageTitle from '../components/PageTitle';
import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import FormError from '../components/auth/FormError';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(fatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(username: $username, email: $email, password: $password) {
      ok
      error
    }
  }
`;

function SignUp() {
  const onCompleted = (data) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      setError('result', { message: error });
    }
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const {
    register,
    handleSubmit,
    formState,
    setError,
    clearErrors,
    getValues,
  } = useForm({
    mode: 'onChange',
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { username, email, password } = getValues();
    console.log(username);
    createAccount({
      variables: {
        username,
        password,
      },
    });
  };
  const clearLoginError = () => {
    clearErrors('result');
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faCalendar} size="2x" />{' '}
          <Subtitle>당신의 성공 루틴을 다른 사람들과 공유하세요!</Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register('username', {
              required: '는 필수입력입니다.',
              minLength: {
                value: 5,
                message: 'Username는 5글자 이상 입력해주세요.',
              },
            })}
            onChange={clearLoginError}
            type="text"
            placeholder="Username"
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register('email', { required: 'Email는 필수입력입니다.' })}
            onChange={clearLoginError}
            type="text"
            placeholder="Email"
          />
          <FormError message={formState.errors?.email?.message} />
          <Input
            {...register('Password', {
              required: 'Password는 필수입력입니다.',
            })}
            onChange={clearLoginError}
            type="password"
            placeholder="Password"
          />
          <FormError message={formState.errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? 'Loading...' : 'Sign up'}
            disabled={!formState.isValid || loading}
          />
          <FormError message={formState.errors?.result?.message} />
        </form>
      </FormBox>
      <BottomBox
        cta={'Have an account?'}
        link={routes.home}
        linkText={'Log in'}
      ></BottomBox>
    </AuthLayout>
  );
}

export default SignUp;
