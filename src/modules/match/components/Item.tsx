import React from 'react';
import { User } from '../../types';
import { getFirstImage, shorten } from '../../helper';
import { Avatar, Chip, Online } from '../../common/components';
import { Detail, Card, Name } from '../styles';
import { useNavigation } from '@react-navigation/native';

function Item({ user }: { user: User }) {
  if (!user) {
    return null;
  }

  const { navigate } = useNavigation();

  const handleDetail = () => {
    return navigate('UserDetail', { user });
  };

  return (
    <Card key={user.id} horizontal={true} onPress={handleDetail}>
      <Chip text={user.info.type} />
      <Avatar image={getFirstImage(user.photos)} placeholder={user.info.name} />
      <Detail>
        <Name>{shorten(user.info.name, 15)}, {user.info.age || ''}</Name>
        <Online isOnline={true} />
      </Detail>
    </Card>
  );
}

export default Item;