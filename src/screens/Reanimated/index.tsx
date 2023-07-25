import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ReanimatedScreen = () => {
  const { navigate } = useNavigation();
  const goToScreen = (screen: string) => {
    navigate(screen);
  };

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <TouchableOpacity
        onPress={() => goToScreen("Begin")}
        className="py-2 px-3 bg-purple-200 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          Begin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("RippleEffect")}
        className="py-2 px-3 bg-purple-300 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          RippleEffect
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("MenuPerspective")}
        className="py-2 px-3 bg-purple-400 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          RippleEffect
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("SliderCounter")}
        className="py-2 px-3 bg-purple-500 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          SliderCounter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("ClockLoader")}
        className="py-2 px-3 bg-purple-500 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          Clock Loader
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("LayoutAnimation")}
        className="py-2 px-3 bg-purple-600 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          Layout Animation
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("FlatListAnimated")}
        className="py-2 px-3 bg-purple-700 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          FlatList Animated
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("TabNavigation")}
        className="py-2 px-3 bg-purple-800 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
          TabNavigation
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen("AnimatedList")}
        className="py-2 px-3 bg-purple-900 rounded-lg mb-2"
      >
        <Text className="text-white text-base font-bold text-center">
        AnimatedList
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReanimatedScreen;
