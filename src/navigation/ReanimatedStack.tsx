import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RouteParams";
import ReanimatedScreen from "../screens/Reanimated";
import Begin from "../screens/Reanimated/Begin";
import RippleEffect from "../screens/Reanimated/RippleEffect";
import MenuPerspective from "../screens/Reanimated/MenuPerspective";
import SliderCounter from "../screens/Reanimated/SliderCounter";
import ClockLoader from "../screens/Reanimated/ClockLoader";
import LayoutAnimation from "../screens/Reanimated/LayoutAnimation";
import FlatListAnimated from "../screens/Reanimated/FlatListAnimated";
import TabNavigation from "../screens/Reanimated/TabNavigation";
import AnimatedList from "../screens/Reanimated/AnimatedList";

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
      <Stack.Screen
        name="RippleEffect"
        component={RippleEffect}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuPerspective"
        component={MenuPerspective}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SliderCounter"
        component={SliderCounter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClockLoader"
        component={ClockLoader}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LayoutAnimation"
        component={LayoutAnimation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FlatListAnimated"
        component={FlatListAnimated}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnimatedList"
        component={AnimatedList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ReanimatedStack;
