import React from 'react'
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Svg, { ClipPath, Ellipse, Image } from 'react-native-svg'
import { styles } from '../AnimatedList/Card'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

const { height, width } = Dimensions.get('window')

const LoginForm = () => {
  const imagePosition = useSharedValue(1)

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0])
    return {
      transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }],
    }
  })

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
    return {
      opacity: withDelay(
        imagePosition.value === 0 ? 0 : 300,
        withTiming(imagePosition.value, { duration: 500 })
      ),
      transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }],
    }
  })

  const closeButtonStyle = useAnimatedStyle(() => {
    const opacityInterpolate = interpolate(imagePosition.value, [0, 1], [1, 0])
    const rotateInterpolate = interpolate(imagePosition.value, [0, 1], [180, 360])
    return {
      opacity: withTiming(opacityInterpolate, { duration: 1000 }),
      transform: [{ rotate: withTiming(rotateInterpolate + 'deg', { duration: 1000 }) }],
    }
  })

  const loginInputsStyle = useAnimatedStyle(() => {
    const opacityInterpolate = interpolate(imagePosition.value, [0, 1], [1, 0])
    const zIndexInterpolate = interpolate(imagePosition.value, [1, 0], [-1, 1])
    return {
      opacity: withTiming(opacityInterpolate, { duration: imagePosition.value === 1 ? 500 : 1500 }),
      zIndex: withTiming(zIndexInterpolate, { duration: 1000 }),
    }
  })

  const onLogin = () => {
    imagePosition.value = 0
  }

  const onClose = () => {
    imagePosition.value = 1
  }

  return (
    <View className="flex-1 justify-end">
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width + 100}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require('./background.jpg')}
            width={width}
            height={height + 100}
            clipPath="url(#clipPathId)"
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
        <Animated.View
          style={[styles.shadow, closeButtonStyle, { top: -20, elevation: 6 }]}
          className="h-10 w-10 self-center items-center rounded-full justify-center bg-white"
        >
          <Text onPress={onClose} className="text-gray-400">
            X
          </Text>
        </Animated.View>
      </Animated.View>
      <View className="flex justify-center" style={{ height: height * 0.3 }}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable
            onPress={onLogin}
            className="bg-purple-400 h-14 items-center justify-center rounded-full mx-5 my-3 border border-white"
          >
            <Text className="text-xl font-bold text-white ">LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable className="bg-purple-400 h-14 items-center justify-center rounded-full mx-5 my-3 border border-white">
            <Text className="text-xl font-bold text-white ">REGISTER</Text>
          </Pressable>
        </Animated.View>
        <Animated.View
          className="mb-16 justify-center"
          style={[StyleSheet.absoluteFill, loginInputsStyle]}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            className="h-12 border border-gray-400 bg-white rounded-full mx-4 my-2 px-4"
          />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="gray"
            className="h-12 border border-gray-400 bg-white rounded-full mx-4 my-2 px-4"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            className="h-12 border border-gray-400 bg-white rounded-full mx-4 my-2 px-4"
          />
          <View
            style={styles.shadow}
            className="bg-purple-400 h-14 items-center justify-center rounded-full mx-5 my-3 border border-white"
          >
            <Text className="text-xl font-bold text-white">LOG IN</Text>
          </View>
        </Animated.View>
      </View>
    </View>
  )
}

export default LoginForm
