import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { isLoggedInVar, logUserOut } from '../apollo.js';
import { useEffect } from 'react';

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(ME_QUERY, { skip: !isLoggedIn });
  console.log(data);
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return;
}

export default useUser;
