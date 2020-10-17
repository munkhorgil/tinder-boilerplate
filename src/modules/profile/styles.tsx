import styled from "styled-components/native";
import { Colors, Metric } from "../common/styles";

export const Top = styled.View`
  margin-top: ${Metric.sm}px;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${Metric.sm}px;
`;

export const Card = styled.View`
  padding: ${Metric.md}px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  font-family: System;
  font-weight: bold;
  font-size: 20px;
  color: ${Colors.deepBlue};
  margin-top: ${Metric.sm}px;
`;

export const About = styled.Text`
  font-family: System;
  font-size: 15px;
  text-align: center;
  color: ${Colors.softBlue};
  margin-top: ${Metric.sm}px;
  margin-horizontal: ${Metric.sm}px;
`;

export const SliderImage = styled.Image`
  border-radius: 20px;
  width: 120px;
  height: 120px;
  margin-right: ${Metric.sm}px;
`;

export const Subtitle = styled.Text`
  color: ${Colors.deepBlue};
  font-size: 18px;
  font-weight: bold;
`;

export const Chip = styled.View`
  background-color: ${Colors.softBlue};
  border-radius: 10px;
  padding: 6px;
  margin: 4px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${Colors.white};
  text-align: center;
  font-size: 8px;
  font-weight: bold;
`;