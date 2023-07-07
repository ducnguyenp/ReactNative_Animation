import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const Begin = () => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(-100, { duration: 300 }),
            withDelay(1500, withTiming(-50, { duration: 300 })),
            withTiming(-100, { duration: 300 })
          ),
          -1
        ),
      },
    ],
    opacity: withRepeat(
      withSequence(
        withDelay(1500, withTiming(0)),
        withDelay(300, withTiming(1)),
      ),
      -1
    ),
  }));

  return (
    <View className="flex-1 flex justify-center items-center bg-white">
      <Animated.View
        className="w-24 h-24 bg-orange-900 rounded-full"
        style={animatedStyle}
      />
      <Animated.View
        entering={SlideInDown}
        className="w-24 h-24 mt-10 bg-orange-400 rounded-full"
      />
    </View>
  );
};

export default Begin;
