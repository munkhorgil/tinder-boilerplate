import * as React from 'react';
import Profile from '../../profile/components/Profile';

type Props = {
  navigation: any;
  route: any;
};

function UserDetailScreen({ navigation, route }: Props) {
  const { user } = route.params;

  const handleBack = () => navigation.pop();

  return (
    <Profile currentUser={user} handleBack={handleBack} />
  );
}

export default UserDetailScreen;