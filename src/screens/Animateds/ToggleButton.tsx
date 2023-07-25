import * as React from "react";
import { Animated, Easing, Image, ImageBackground, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const nightImage = "../../assets/images/night.jpg"
const moonImage = "../../assets/images/moon.jpg"

const ToggleButton = () => {
  const animatedImageValue = React.useRef(new Animated.Value(1)).current
  const animatedButtonValue = React.useRef(new Animated.Value(0)).current
  const [isChecked, setIsChecked] = React.useState(false)

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedImageValue, {
        toValue: isChecked ? 0 : 1,
        duration: 800,
        useNativeDriver: true
      }),
      Animated.timing(animatedButtonValue, {
        toValue: isChecked ? 100 : 0,
        duration: 800,
        easing: Easing.bounce,
        useNativeDriver: true
      })
    ]).start()
  }, [isChecked])

  const opacityBackgroundNight = {
    opacity: animatedImageValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })
  }

  const opacityBackgroundMoon = {
    opacity: animatedImageValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
  }

  const buttonBackground = {
    transform: [
      {
        translateX: animatedButtonValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 96]
        })
      }
    ]
  }

  const onCheck = () => {
    setIsChecked(pre => !pre)
  }

  return (
    <View className="flex-1 flex justify-center items-center bg-gray-900">
      <TouchableOpacity className="w-40 h-16 bg-white rounded-full relative" onPress={onCheck}>
        <Animated.Image source={require(nightImage)} className="w-40 h-16 rounded-full absolute" style={opacityBackgroundNight}/>
        <Animated.Image source={require(moonImage)} className="w-40 h-16 rounded-full absolute" style={opacityBackgroundMoon}/>
        <Animated.View style={buttonBackground}>
        <View className="w-16 h-16 p-1" >
          <View className="w-full h-full bg-white rounded-full shadow-slate-50"></View>
        </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
