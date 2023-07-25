import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, View } from "react-native";
import Lottie from "lottie-react-native";
import AnimatedTabBar from "./AnimatedTabBar";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
        <Tab.Navigator tabBar={(props) => <AnimatedTabBar {...props} />}>
          <Tab.Screen
            name="Home"
            component={PlaceholderScreen}
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => (
                <Lottie
                  ref={ref}
                  source={require("./Icon/home.icon.json")}
                  style={{ height: 36, width: 36 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={PlaceholderScreen}
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => (
                <Lottie
                  ref={ref}
                  source={require("./Icon/settings.icon.json")}
                  style={{ height: 36, width: 36 }}
                />
              ),
            }}
          />
           <Tab.Screen
            name="Chat"
            component={PlaceholderScreen}
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => (
                <Lottie
                  ref={ref}
                  source={require("./Icon/chat.icon.json")}
                  style={{ height: 36, width: 36 }}
                />
              ),
            }}
          />
           <Tab.Screen
            name="Upload"
            component={PlaceholderScreen}
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => (
                <Lottie
                  ref={ref}
                  source={require("./Icon/upload.icon.json")}
                  style={{ height: 36, width: 36 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
    </>
  );
};

const PlaceholderScreen = () => {
  return (
    <View className="flex-1" style={{ backgroundColor: '#604AE6'}} />
  )
}

export default TabNavigation;
