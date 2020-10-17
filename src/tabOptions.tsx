import React from "react";
import styled from "styled-components/native";
import { Easing, Animated } from "react-native";
import { RoundGradient } from "./modules/common/components";
import { Colors, Metric } from "./modules/common/styles";
import icons from "./assets/icons";

const TabBar = styled.View`
  position: absolute;
  bottom: 15px;
  left: 80px;
  right: 80px;
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 ${Metric.md}px;
  background-color: ${Colors.white};
  box-shadow: 0 10px 20px rgba(255, 161, 140, 0.37);
  border-radius: 30px;
`;

const Button = styled.TouchableOpacity`
  padding: ${Metric.md}px;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
  tint-color: ${Colors.white};
`;

export default function tabOptions({ state, descriptors, navigation }: any) {
  return (
    <TabBar>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const focusAnim = new Animated.Value(0);

        const isFocused = state.index === index;

        if (isFocused) {
          Animated.spring(focusAnim, {
            toValue: 25,
            friction: 1,
            useNativeDriver: false
          }).start();
        } else {
          Animated.timing(focusAnim, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false
          }).start();
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Animated.View style={{ marginBottom: focusAnim }}>
            <RoundGradient>
              <Button
                key={route.key}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ["selected"] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <Icon source={icons[route.name.toLowerCase()]} />
              </Button>
            </RoundGradient>
          </Animated.View>
        );
      })}
    </TabBar>
  );
}
