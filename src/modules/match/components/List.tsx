import React from 'react';
import { View, FlatList } from 'react-native';
import { User } from '../../types';
import { Metric } from '../../common/styles';
import Item from './Item';

type Props = {
  data: User[];
  header: JSX.Element;
};

function List({ data, header }: Props) {
  const renderItem = ({ item }: { item: User }) => <Item user={item} />;

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      numColumns={2}
      renderItem={renderItem}
      ListHeaderComponent={header}
      ListFooterComponent={<View style={{ marginBottom: Metric.lg }} />}
    />
  );
}

export default List;