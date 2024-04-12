import { useForm } from 'react-hook-form';
import PageTitle from '../components/PageTitle';
import AuthLayout from '../components/auth/AuthLayout';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';
import Separator2 from '../components/auth/Separator2';
import FormError from '../components/auth/FormError';
import { gql, useMutation } from '@apollo/client';

const CREATE_ROUTINE_MUTATION = gql`
  mutation createRoutine($title: String!, $days: Int!, $hashtags: String) {
    createRoutine(title: $title, days: $days, hashtags: $hashtags) {
      ok
      error
    }
  }
`;

function RoutineCreate() {
  const onCompleted = (data) => {
    const {
      createRoutine: { ok, error },
    } = data;
    console.log(ok, error);
  };

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

  const [createRoutine, { loading }] = useMutation(CREATE_ROUTINE_MUTATION, {
    onCompleted,
  });

  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    console.log(typeof data.days);
    const { title, days, hashtags } = getValues();

    createRoutine({
      variables: {
        title: title,
        days: Number(days),
        hashtags: hashtags,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="Routine 생성" />
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <Input
          {...register('title', {
            required: '는 필수입력입니다.',
            minLength: {
              value: 3,
              message: '루틴 이름은 3글자 이상 입력해주세요.',
            },
          })}
          type="text"
          placeholder="루틴 이름"
        />
        <FormError message={formState.errors?.title?.message} />
        <Input
          {...register('days', {
            required: '는 필수입력입니다.',
            min: {
              value: 7,
              message: '기간은 7일 이상입니다.',
            },
          })}
          type="text"
          placeholder="기간"
        />
        <FormError message={formState.errors?.days?.message} />
        <Input
          {...register('hashtags', {
            minLength: {
              value: 3,
              message: '태그는 3글자 이상 입력해주세요.',
            },
          })}
          type="text"
          placeholder="태그"
        />
        <FormError message={formState.errors?.hashtags?.message} />
        <Separator2 />
        <Button type="submit" value="생성" disabled={!formState.isValid} />
        <FormError message={formState.errors?.result?.message} />
      </form>
    </AuthLayout>
  );
}

export default RoutineCreate;
