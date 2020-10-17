import * as React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Metric, Colors } from '../styles';
import Gradient from './Gradient';
import icons from '../../../assets/icons';

const Container = styled.View`
  flex-direction: row;
  margin: 0 4px;
  background: ${Colors.white};
  box-shadow: 0 4px 9px rgba(214, 230, 252, 1);
  border-radius: 20px;
  margin-bottom: ${Metric.md}px;
  align-items: center;
  justify-content: flex-start;
  padding: ${Metric.sm}px;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
  tint-color: ${Colors.white};
`;

const gradientStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  padding: 8,
  borderRadius: 15
};

const inputStyle = {
  flex: 1,
  marginLeft: Metric.md,
  height: Metric.lg,
};

type Props = {
  value: string;
  onBlur: () => void;
  onChange: (value: string) => void;
};

export default function Search({ value, onBlur, onChange }: Props) {
  return (
    <Container>
      <Gradient colors={Colors.buttonGradient} style={gradientStyle}>
        <Icon source={icons.home} />
      </Gradient>
      <TextInput
        value={value}
        onSubmitEditing={onBlur}
        onChangeText={onChange}
        placeholder="Search"
        returnKeyLabel="Search"
        returnKeyType="done"
        autoCorrect={false}
        style={inputStyle}
      />
    </Container>
  );
}
