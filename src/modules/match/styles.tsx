import * as React from 'react';
import styled from 'styled-components/native';
import { Colors, Metric } from '../common/styles';

export const Card = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin: ${Metric.sm}px;
`;

export const Detail = styled.View`
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  margin-left: ${Metric.md}px;
  margin-bottom: ${Metric.sm}px;
`;

export const Name = styled.Text`
  font-family: System;
  font-weight: bold;
  font-size: 12px;
  color: ${Colors.white};
`;