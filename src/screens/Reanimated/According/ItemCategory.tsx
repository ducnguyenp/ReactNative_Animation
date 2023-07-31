import React from "react";
import { Category } from "./data";
import { Pressable, Text, View } from "react-native";
import Chevron from "./Chevron";
import Animated, {
  Extrapolate,
  interpolate,
  measure,
  runOnJS,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  item: Category;
};

const ItemCategory: React.FC<Props> = ({ item }) => {
  const open = useSharedValue(false);
  const heightValue = useSharedValue(0);
  const listRef = useAnimatedRef<Animated.View>();
  const progress = useDerivedValue(() => {
    return open.value ? withTiming(1) : withTiming(0);
  });

  const heightAnimationStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        progress.value,
        [0, 1],
        [0, heightValue.value],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <View className="bg-sky-100 m-3 rounded-xl border border-sky-400 overflow-hidden">
      <Pressable
        className="p-5 flex-row justify-between items-center"
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              "worklet";
              heightValue.value = measure(listRef).height;
            })();
          }
          open.value = !open.value;
        }}
      >
        <Text className="text-base text-gray-700">{item.title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listRef} className="absolute top-0 w-full">
          {item.content.map((item, index) => (
            <View key={index} className="px-5 py-3 bg-gray-100">
              <Text className="text-sm">{item}</Text>
            </View>
          ))}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default ItemCategory;
