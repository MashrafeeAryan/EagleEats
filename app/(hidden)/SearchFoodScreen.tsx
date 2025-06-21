import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const tabs = ["Dining Hall", "Campus Outlets", "Manual Entry"];
const foods = [
  {
    name: "Hamburger",
    calories: 700,
    carbs: "200g",
    protein: "18g",
    fat: "6g",
  },
  {
    name: "Pasta",
    calories: 700,
    carbs: "10g",
    protein: "18g",
    fat: "2g",
  },
  {
    name: "Spaghetti Bolognese",
    calories: 300,
    carbs: "54g",
    protein: "20g",
    fat: "8g",
  },
  {
    name: "Hot Dogs",
    calories: 400,
    carbs: "60g",
    protein: "16g",
    fat: "2g",
  },
  {
    name: "Fried Fries",
    calories: 350,
    carbs: "70g",
    protein: "4g",
    fat: "12g",
  },
  {
    name: "Coco Cola",
    calories: 140,
    carbs: "40g",
    protein: "0g",
    fat: "0g",
  },
];

export default function SearchFoodScreen() {
  const [selectedTab, setSelectedTab] = useState("Dining Hall");
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-4">
        <Ionicons name="arrow-back" size={24} color="black" />
        <View className="absolute left-0 right-0 items-center">
          <Text className="text-lg font-bold">Add Food</Text>
        </View>
      </View>

      {/* Tabs */}
      <View className="flex-row px-4 mt-5 space-x-3">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`px-4 py-2 rounded-full ${
              selectedTab === tab ? "bg-black" : "bg-gray-200"
            }`}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              className={`text-sm font-semibold ${
                selectedTab === tab ? "text-white" : "text-black"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-200 rounded-xl px-4 py-2 mx-4 mt-4">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          className="ml-3 flex-1 text-base"
          placeholder="Search food..."
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="gray"
        />
      </View>

      {/* Food Grid */}
      <ScrollView className="mt-4 px-4" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap justify-between">
          {foods
            .filter((f) =>
              f.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((f, index) => (
              <View key={index} className="w-[48%] bg-white rounded-xl shadow p-3 mb-4">
                <Text className="font-bold text-base mb-1">{f.name}</Text>
                <Text className="text-sm">Calories: {f.calories}</Text>
                <Text className="text-sm">Carbs: {f.carbs}</Text>
                <Text className="text-sm font-semibold">Protein: {f.protein}</Text>
                <Text className="text-sm">Fat: {f.fat}</Text>
                <View className="absolute bottom-2 right-2">
                  <Ionicons name="fast-food" size={28} color="#f59e0b" />
                </View>
              </View>
            ))}
        </View>
      </ScrollView>


    </SafeAreaView>
  );
}
