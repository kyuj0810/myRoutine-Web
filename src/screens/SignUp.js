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

function SignUp() {
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faCalendar} size="2x" />{' '}
          <Subtitle>당신의 성공 루틴을 다른 사람들과 공유하세요!</Subtitle>
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign up" />
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
