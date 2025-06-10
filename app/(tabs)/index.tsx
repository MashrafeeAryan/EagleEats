import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressRings from "@/components/ProgressRings";

const Index = () => {
  const calories = 900;
  const goal = 2000;

  return (
    <SafeAreaView className="flex-1 bg-white">
      //
        <View className="items-center">
          <ProgressRings value={calories} goal={goal} />

          {/* Text aligned to left */}
          <View className="w-full px-4 mt-2">
            <Text className="text-left text-lg font-semibold">Your Nutrition Goals</Text>
          </View>

          {/*ScrollView to make sure we can scroll horizontally */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="p-4">
          {/*Nutrition Goals Boxes*/}

          {/*Get padding at the beginning */}

          <View className="bg-gray-100 rounded-xl p-4 mr-3 w-[120] h-[100] items-center justify-center border-[#3498db] border-2">
            
          </View>
          <View className="bg-gray-100 rounded-xl p-4 mr-3 w-[120] h-[100] items-center justify-center border-[#e74c3c] border-2"></View>
          <View className="bg-gray-100 rounded-xl p-4 mr-3 w-[120] h-[100] items-center justify-center border-[#9b59b6] border-2"></View>
          <View className="bg-gray-100 rounded-xl p-4 mr-3 w-[120] h-[100] items-center justify-center border-[#f1c40f] border-2"></View>
          
          {/*Get padding at the end */}
            <View style={{ width: 10 }} />
          </ScrollView>
         
        </View>
      
    </SafeAreaView>
  );
};

export default Index;
