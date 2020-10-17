import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "../styles";
import Gradient from "./Gradient";

const gradientProps = (isFocused: boolean = false, size?: number) => ({
  colors: Colors.buttonGradient,
  style: {
    width: isFocused ? 40 : size || 30,
    height: isFocused ? 40 : size || 30,
    borderRadius: isFocused ? 40 / 2 : (size || 30) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: Colors.pink,
    shadowOffset: {
      width: 0,
      height: 2.2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 9,
  },
});

export default function RoundGradient({
  isFocused,
  children,
  onPress,
  size,
}: {
  size?: number;
  isFocused?: boolean;
  children: JSX.Element;
  onPress: () => void;
}) {
  const content = (
    <Gradient {...gradientProps(isFocused, size)}>{children}</Gradient>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }

  return content;
}
