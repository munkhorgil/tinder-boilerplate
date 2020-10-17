import * as React from "react";
import styled from "styled-components/native";
import { Metric, Colors } from "../styles";

const common = `
  padding: 6px 8px;
  border-radius: 12px;
  margin-right: ${Metric.sm}px;
  margin-bottom: ${Metric.sm}px;
`;

const Container = styled.View`
  ${common}
  background-color: ${Colors.orange};
  box-shadow: 0 2px 7px ${Colors.shadow};
`;

const ContainerBordered = styled.View`
  ${common}
  background-color: transparent;
  border-color: ${Colors.orange};
  border-width: 1px;
`;

const Text = styled.Text`
  font-family: System;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  color: ${props => props.bordered ? Colors.orange : Colors.white};
`;

export default React.memo(function Label({
  bordered,
  text = "",
}: {
  bordered?: boolean;
  text: string;
}) {
  if (!text || text.length === 0) {
    return null;
  }

  const content = <Text bordered={bordered}>{text.toUpperCase()}</Text>;

  if (bordered) {
    return <ContainerBordered>{content}</ContainerBordered>;
  }

  return <Container>{content}</Container>;
});
