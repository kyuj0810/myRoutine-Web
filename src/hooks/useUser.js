import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { isLoggedInVar, logUserOut } from '../apollo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const location = useNavigate();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(ME_QUERY, { skip: !isLoggedIn });
  console.log(data);
  useEffect(() => {
    if (data?.me === null) {
      logUserOut(location);
    }
  }, [data]);
  return;
}

export default useUser;
