import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { data } from "./data";
import ItemCategory from "./ItemCategory";

const According = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {data.map((item) => (
          <ItemCategory item={item} key={item.title} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default According;
