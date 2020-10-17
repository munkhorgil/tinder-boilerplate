import styled from 'styled-components/native';
import { Colors, Metric } from '../common/styles';

export const Container = styled.View`
  background-color: teal;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 100;
  right: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 ${Metric.lg}px;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${Colors.white};
`;