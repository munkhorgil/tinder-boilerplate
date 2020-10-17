import "react-native-gesture-handler";
import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { ReactQueryConfigProvider } from "react-query";
import { BackHandler, Alert, StatusBar } from 'react-native';
import Root from './src/index';

console.disableYellowBox = true;

const queryConfig = {
  queries: {
    retry: 0
  }
};

// For Android
const backAction = () => {
  Alert.alert("", "Are you sure you want to quite the app?", [
    {
      text: "No",
      style: "cancel",
      onPress: () => null,
    },
    { text: "Yes", onPress: () => BackHandler.exitApp() },
  ]);

  return true;
};

const App = () => {
  const navigationRef = React.useRef(null);

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Root />
      </NavigationContainer>
    </ReactQueryConfigProvider>
  );
};

export default App;
