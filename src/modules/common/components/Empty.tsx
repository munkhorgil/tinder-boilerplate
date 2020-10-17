import React from 'react';
import styled from 'styled-components/native';
import { Metric, Colors } from '../styles';

const Container = styled.View`
  margin: ${Metric.md}px;
`;

const Text = styled.Text`
  font-size: 20;
  color: ${Colors.deepBlue};
  text-align: center;
`;

export default function Empty({ text }: { text: string }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}