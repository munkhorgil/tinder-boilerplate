import * as React from 'react';
import styled from 'styled-components/native';
import { Metric, Colors } from '../styles';

const chipColors = [
  Colors.green,
  Colors.pink,
];

const Container = styled.View`
  position: absolute;
  z-index: 4;
  top: ${props => props.size === 'large' ? Metric.md : Metric.sm }px;
  right: ${props => props.size === 'large' ? Metric.md : Metric.sm }px;
  padding: ${props => props.size === 'large' ? `6px 8px` : `2px 4px` };
  border-radius: ${props => props.size === 'large' ? `24px` : `12px` };
  background-color: ${props => props.color ? props.color : Colors.green};
`;

const Text = styled.Text`
  font-family: System;
  font-weight: bold;
  font-size: ${props => props.size === 'large' ? '14px' : '7px'};
  text-align: center;
  color: ${Colors.white};
`;

function getRandomColor(): string {
  return chipColors[Math.floor(Math.random() * (chipColors.length - 1) + 1)];
}


export default React.memo(function Chip({ size, text }: { size?: string, text: string }) {
  const randomColor = getRandomColor();

  return (
    <Container color={randomColor} size={size}>
      <Text size={size}>{(text || '').toUpperCase()}</Text>
    </Container>
  );
});