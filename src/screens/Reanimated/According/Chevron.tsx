import MyIcon from "../../../commons/MyIcon";
import React from "react";
import { Text, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

type Props = {
  progress: Animated.SharedValue<number>;
};

const Chevron = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: `${progress.value * -180}deg`}
      ]
    }
  })
  return (
    <Animated.View className="bg-sky-500 rounded-full" style={iconStyle}>
      <MyIcon name="chevron-down" size={26} color={"white"} />
    </Animated.View>
  );
};

export default Chevron;
