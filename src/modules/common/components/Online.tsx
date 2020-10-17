import * as React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../styles';

const Container = styled.View`
  z-index: 4;
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3;
  background: ${props => props.isOnline ? Colors.green : Colors.gray };
`;

const Text = styled.Text`
  color: ${Colors.white};
  font-size: 10px;
  margin-left: 4px;
`;

export default function Online({ isOnline }: { isOnline: boolean }) {
  return (
    <Container>
      <Dot isOnline={isOnline} />
      <Text>{isOnline ? 'Online' : 'Offline'}</Text>
    </Container>
  );
}