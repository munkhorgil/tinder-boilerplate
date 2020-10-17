import React from 'react';
import ProfileScreen from '../components/ProfileScreen';
import { useQuery } from 'react-query';
import { sendRequest } from '../../common/utils';

type Props = {
};

function getRandom(): number {
  return Math.floor(Math.random() * (20 - 1) + 1);
}

function ProfileScreenContainer(props: Props) {
  const { data = [], isLoading } = useQuery(['users', 'currentUser'], sendRequest);

  const currentUser = data[getRandom()];
  
  const updatedProps = {
    ...props,
    isLoading,
    currentUser
  };

  return (
    <ProfileScreen {...updatedProps} /> 
  );
}

export default ProfileScreenContainer;