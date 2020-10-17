import React from 'react';
import MatchScreen from '../components/MatchScreen';
import { useQuery } from 'react-query';
import { sendRequest } from '../../common/utils';

type Props = {};

function MatchScreenContainer(props: Props) {
  const { data = [], isLoading } = useQuery(['users', 'users'], sendRequest);

  const updatedProps = {
    ...props,
    isLoading,
    people: data
  };

  return (
    <MatchScreen {...updatedProps} /> 
  );
}

export default MatchScreenContainer;