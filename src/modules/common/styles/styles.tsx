import React from 'react';
import styled from 'styled-components/native';
import { Colors, Metric } from '.';
import icons from '../../../assets/icons';

export const Card = styled.View`
  alignItems: center;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  background-color: ${Colors.white};
  border-radius: ${Metric.md}px;
  margin-bottom: ${Metric.md}px;
  padding: ${Metric.lg}px;
  box-shadow: 0 3px 8px rgba(214, 230, 252, 0.7);
`;

const Wrapper = styled.View`
  flex-direction: row;
  margin-top: ${Metric.lg}px;
  margin-bottom: ${Metric.sm}px;
  align-items: center;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Button = styled.TouchableOpacity`
  padding: 12px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: System;
  font-weight: bold;
  font-size: 25px;
  color: ${Colors.deepBlue};
  text-align: center;
`;

export default function Header({ title, handleBack }: { title: string, handleBack: () => void }) {
  if (!handleBack) {
    return (
      <Wrapper>
        <Title>{title}</Title>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Button onPress={handleBack}>
        <Icon source={icons.back} />
      </Button>
      <Title>{title}</Title>
      <Button/>
    </Wrapper>
  );
}