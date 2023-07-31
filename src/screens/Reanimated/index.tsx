import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ButtonStyle = 'py-2 px-3 rounded-lg mb-2'

const ReanimatedScreen = () => {
  const { navigate } = useNavigation()
  const goToScreen = (screen: string) => {
    navigate(screen)
  }

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <TouchableOpacity
        onPress={() => goToScreen('Begin')}
        className={`${ButtonStyle} bg-purple-200`}
      >
        <Text className="text-white text-base font-bold text-center">Begin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('RippleEffect')}
        className={`${ButtonStyle} bg-purple-300`}
      >
        <Text className="text-white text-base font-bold text-center">RippleEffect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('MenuPerspective')}
        className={`${ButtonStyle} bg-purple-400`}
      >
        <Text className="text-white text-base font-bold text-center">RippleEffect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('SliderCounter')}
        className={`${ButtonStyle} bg-purple-500`}
      >
        <Text className="text-white text-base font-bold text-center">SliderCounter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('ClockLoader')}
        className={`${ButtonStyle} bg-purple-500`}
      >
        <Text className="text-white text-base font-bold text-center">Clock Loader</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('LayoutAnimation')}
        className={`${ButtonStyle} bg-purple-600`}
      >
        <Text className="text-white text-base font-bold text-center">Layout Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('FlatListAnimated')}
        className={`${ButtonStyle} bg-purple-700`}
      >
        <Text className="text-white text-base font-bold text-center">FlatList Animated</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('TabNavigation')}
        className={`${ButtonStyle} bg-purple-800`}
      >
        <Text className="text-white text-base font-bold text-center">TabNavigation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('AnimatedList')}
        className={`${ButtonStyle} bg-purple-900`}
      >
        <Text className="text-white text-base font-bold text-center">AnimatedList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('InputAnimated')}
        className={`${ButtonStyle} bg-blue-900`}
      >
        <Text className="text-white text-base font-bold text-center">Input Animated</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('According')}
        className={`${ButtonStyle} bg-blue-800`}
      >
        <Text className="text-white text-base font-bold text-center">According</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('LoginForm')}
        className={`${ButtonStyle} bg-blue-700`}
      >
        <Text className="text-white text-base font-bold text-center">Login Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToScreen('DrawerAnimation')}
        className={`${ButtonStyle} bg-blue-600`}
      >
        <Text className="text-white text-base font-bold text-center">Drawer Animation</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ReanimatedScreen
