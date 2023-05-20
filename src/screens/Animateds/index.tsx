import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const AnimatedScreen = () => {
  const { navigate } = useNavigation()
  const goToScreen = (screen: string) => {
    navigate(screen)
  }

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <TouchableOpacity onPress={() => goToScreen('HeaderMomo')} className="py-2 px-3 bg-red-300 rounded-lg mb-2">
          <Text className="text-white text-base font-bold text-center">Header MOMO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToScreen('DraggableBottomSheet')} className="py-2 px-3 bg-red-400 rounded-lg mb-2">
          <Text className="text-white text-base font-bold text-center">Draggable Bottom Sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToScreen('ModalAnimation')} className="py-2 px-3 bg-red-500 rounded-lg mb-2">
          <Text className="text-white text-base font-bold text-center">Modal Animation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnimatedScreen;
