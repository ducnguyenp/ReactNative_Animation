import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const goToAnimatedScreen = () => {
    navigate("AnimatedStack", {
      screen: "AnimatedScreen",
    });
  };

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <TouchableOpacity
          className="rounded-lg bg-slate-600 py-2 px-4"
          onPress={goToAnimatedScreen}
        >
          <Text className="text-white text-base font-bold">Animated</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
