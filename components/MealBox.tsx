import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const MealBox = () => {
  const [foods, setFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const addFood = () => {
    // For example purposes, just add a dummy food with 100 KCAL
    const newFood = { id: Date.now().toString(), name: "Egg", calories: 100 };
    setFoods([newFood, ...foods]);
    setTotalCalories(totalCalories + newFood.calories);
  };

  return (
    <View className="bg-gray-100 rounded-xl p-4 m-4">
      
      {/* Header Row */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold">Breakfast</Text>
        <Text className="text-lg font-semibold">{totalCalories} KCAL</Text>
      </View>

      {/* Food List */}
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-2 bg-white rounded mb-2">
            <Text>{item.name} - {item.calories} KCAL</Text>
          </View>
        )}
      />

      {/* Add Food Button */}
      <TouchableOpacity
        className="bg-blue-500 p-3 rounded items-center mt-2"
        onPress={addFood}
      >
        <Text className="text-white font-bold">Add Food</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MealBox;
