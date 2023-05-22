import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const AnimatedExample = () => {
  const animatedValue = useRef(new Animated.Value(80)).current; // dung ref de ko render lai UI khi thay doi
  const animated2Value = useRef(new Animated.Value(80)).current;
  const animated3Value = useRef(
    new Animated.ValueXY({
      x: 80,
      y: 80,
    })
  ).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;

  const animated = () => {
    animatedValue.setValue(80);
    Animated.timing(animatedValue, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const animated2 = () => {
    animated2Value.setValue(80);
    Animated.timing(animated2Value, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true, // dung useNative thi se phai apply cach khac de chay animation
    }).start();
  };

  const animated3 = () => {
    animated3Value.setValue({
      x: 80,
      y: 80,
    });
    Animated.timing(animated3Value, {
      toValue: {
        x: 200,
        y: 200,
      },
      duration: 1000,
      easing: Easing.quad,
      useNativeDriver: false,
    }).start();
  };

  const opacityView = {
    opacity: animatedValue3.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0]
    })
  }

  const blockView = {
    transform: [
      {
        scaleY: animatedValue3.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0.7],
          extrapolate: "clamp",
        }),
      },
      {
        scaleX: animatedValue3.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0.7],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedValue3.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -48],
          extrapolate: "clamp",
        }),
      },
      {
        translateX: animatedValue3.interpolate({
          inputRange: [0, 50],
          outputRange: [0, 20],
          extrapolate: "clamp",
        }),
      },
    ]
    // opacity: animatedValue3.interpolate({
    //   inputRange: [0, 50],
    //   outputRange: [1, 0],
    //   extrapolate: "clamp",
    // }),
  }

  return (
    <>
      <Animated.View
        className="w-28 h-28 mt-20 bg-red-200"
        style={{ marginLeft: animatedValue }}
      />

      <Animated.View
        className="w-28 h-28 bg-red-500"
        style={{ transform: [{translateY: animated2Value}]}}
      />

      <Animated.View
        className="w-28 h-28 bg-red-400"
        style={{ marginLeft: animated3Value.x, marginTop: animated3Value.y }}
      />

      <TouchableOpacity
        className="py-2 px-3 bg-slate-500 mx-10 mt-4 rounded-lg"
        onPress={animated}
      >
        <Text className="text-white text-center font-bold">Animated1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="py-2 px-3 bg-slate-500 mx-10 mt-4 rounded-lg"
        onPress={animated2}
      >
        <Text className="text-white text-center font-bold">Animated2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="py-2 px-3 bg-slate-500 mx-10 mt-4 rounded-lg"
        onPress={animated3}
      >
        <Text className="text-white text-center font-bold">Animated3</Text>
      </TouchableOpacity>

      <Animated.View className="bg-sky-300 h-10 w-full mt-3" style={opacityView}></Animated.View>
      <Animated.View className="w-6 h-6 bg-yellow-600 rounded-md" style={blockView} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => animatedValue3.setValue(e.nativeEvent.contentOffset.y)}
      >
        <View style={{ height: 1000 }} />
      </ScrollView>
    </>
  );
};

export default AnimatedExample;
