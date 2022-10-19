import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import AppLoading  from "expo-app-loading";

import OnboardingScreen from "./app/screens/OnboardingScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import SignInScreen from "./app/screens/SignInScreen";
// import Test from "./app/screens/Test";

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "font-regular": require("./app/assets/fonts/Poppins-Regular.ttf"),
    "font-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
    "font-semibold": require("./app/assets/fonts/Poppins-SemiBold.ttf"),
    "font-medium": require("./app/assets/fonts/Poppins-Medium.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          // initialRouteName=""
        >
          <Stack.Screen name="onboarding" component={OnboardingScreen} />
          <Stack.Screen name="signup" component={SignUpScreen} />
          <Stack.Screen name="signin" component={SignInScreen} />
          {/* <Stack.Screen name="test" component={Test} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
