import React from "react";
import HeaderMomo from "../screens/Animateds/HeaderMomo";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RouteParams";
import AnimatedScreen from "../screens/Animateds";
import DraggableBottomSheet from "../screens/Animateds/DraggableBottomSheet";

const Stack = createStackNavigator<RootStackParamList>()

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AnimatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AnimatedScreen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="AnimatedScreen"
        component={AnimatedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderMomo"
        component={HeaderMomo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DraggableBottomSheet"
        component={DraggableBottomSheet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AnimatedStack;
