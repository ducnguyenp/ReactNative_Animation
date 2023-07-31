import React, { useEffect, useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const InputAnimated = () => {
  const [value, setValue] = useState("");
  const animatedLabel = useSharedValue(0);
  const animatedLabelColor = useSharedValue("gray");
  const animatedButton = useSharedValue("gray");
  const animatedInputContainer = useSharedValue(0);

  const labelStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(animatedLabelColor.value, { duration: 200 }),
      transform: [
        { translateY: withTiming(-animatedLabel.value, { duration: 200 }) },
      ],
    };
  });

  const inputColor = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(animatedLabelColor.value, { duration: 200 }),
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(animatedButton.value, { duration: 500 }),
    };
  });

  const inputContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedInputContainer.value }],
    };
  });

  const onBlur = () => {
    if (!value) {
      animatedLabel.value = 0;
    }
  };

  const onSubmit = () => {
    if (value !== "duc") {
      animatedLabelColor.value = "red";
      animatedInputContainer.value = withRepeat(
        withSequence(
          withTiming(5, { duration: 100 }),
          withTiming(-5, { duration: 100 })
        ),
        3,
        true
      );
    } else {
      animatedLabelColor.value = "gray";
    }
  };

  const onFocus = () => {
    animatedLabel.value = 25;
    animatedLabelColor.value = "gray";
  };

  useEffect(() => {
    if (value) {
      animatedButton.value = "blue";
    } else {
      animatedButton.value = "grey";
      animatedLabelColor.value = "gray";
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
      <View className="px-4 flex-1 bg-white">
        <View className="flex-1 items-center relative mt-10">
          <Animated.View style={inputContainerStyle} className="w-full">
            <Animated.View
              style={inputColor}
              className="border rounded-xl w-full"
            >
              <TextInput
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => setValue(text)}
                className="w-full h-12 px-4"
              />
            </Animated.View>
            <Animated.Text
              style={labelStyle}
              className="absolute top-3 left-4 px-2 bg-white"
            >
              Text input
            </Animated.Text>
          </Animated.View>

          <Animated.View
            className="absolute bottom-0 mb-10 rounded-2xl"
            style={buttonStyle}
          >
            <TouchableOpacity
              disabled={!value}
              onPress={onSubmit}
              className="px-12 h-14 justify-center items-center"
            >
              <Text className="text-white font-bold text-lg">Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputAnimated;
