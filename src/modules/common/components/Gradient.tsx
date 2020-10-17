import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

type Props = {
  colors: string[];
  children: JSX.Element;
  style?: { [key: string]: any };
  shadow?: { [key: string]: any };
};


export default function Gradient({ children, colors, style, shadow }: Props) {
  const content = (
    <LinearGradient colors={colors} style={style || { flex: 1 }}>
      {children}
    </LinearGradient>
  );

  if (!shadow) {
    return content;
  }

  return (
    <View style={shadow}>
      {content}
    </View>
  );
}
