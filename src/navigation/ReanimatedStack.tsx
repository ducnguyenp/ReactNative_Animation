import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RouteParams";
import ReanimatedScreen from "../screens/Reanimated";
import Begin from "../screens/Reanimated/Begin";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const ReanimatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReanimatedScreen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="ReanimatedScreen"
        component={ReanimatedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Begin"
        component={Begin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ReanimatedStack;
