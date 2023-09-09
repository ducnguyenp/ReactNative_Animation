import { View, Text, TouchableOpacity, TextInput, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../..'
import MyIcon from '@app/commons/MyIcon'
import Categories from './Categories'
import { ScrollView } from 'react-native-gesture-handler'
import CoffeeList from './CoffeeList'
import { Image } from 'react-native'

const { height } = Dimensions.get('window')
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1)

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 relative">
        {/* <Image
          source={require('../../assets/images/beansBackground1.jpg')}
          style={{ height: height * 0.24 }}
          className="w-full absolute -top-5 opacity-10"
        /> */}
        <View className="flex-1">
          <View className="mx-4 flex-row justify-between items-center">
            {/* <Image
              source={require("../../assets/images/avatar.jpg")}
              className="h-9 w-9 rounded-full"
            /> */}
            <View className="flex-row items-center space-x-2">
              <MyIcon size={25} color={themeColors.bgLight} name="map-marker" />
              <Text className="font-semibold text-base">New York, NYC</Text>
            </View>
            <MyIcon size={27} color="black" name="bell-outline" />
          </View>
          <View className="mx-5 shadow" style={{ marginTop: height * 0.04 }}>
            <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
              <TextInput
                placeholder="Search"
                className="p-4 flex-1 font-semibold text-gray-700"
              />
              <TouchableOpacity
                className="rounded-full p-2 mr-1"
                style={{ backgroundColor: themeColors.bgLight }}
              >
                <MyIcon size={25} name="magnify" color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="px-5 mt-6 mb-4">
            <Categories
              activeCategory={activeCategory}
              setActiveCategory={(id: number) => setActiveCategory(id)}
            />
          </View>
        </View>
        <View className={`flex justify-center flex-1`}>
          <CoffeeList />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen
