import * as React from 'react';
import HomeScreen from '../components/HomeScreen';
import { useQuery } from 'react-query';
import { sendRequest } from '../../common/utils';

type Props = {};

function HomeScreenContainer(props: Props) {
  const { data = [], isLoading } = useQuery(['users', 'users'], sendRequest);

  const updatedProps = {
    ...props,
    isLoading,
    people: data
  };

  return (
    <HomeScreen {...updatedProps}/>
  );
}

export default HomeScreenContainer;