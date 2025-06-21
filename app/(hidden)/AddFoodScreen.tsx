import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const diningHalls = [
  "Fresh Food",
  "Panda Express",
  "Subway",
  "Chick-Fil-A",
];

export default function AddFoodScreen() {
  const [selectedHall, setSelectedHall] = useState("Fresh Food");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter()
  const handleSelectHall = (hall) => {
    setSelectedHall(hall);
    setModalVisible(false);
    router.push("/SearchFoodScreen")
  };


  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        {/* Top Bar */}
        <View className="flex-row items-center justify-between px-4 pt-4">
          <Ionicons name="arrow-back" size={24} color="black" />
          <View className="absolute left-0 right-0 items-center">
            <Text className="text-lg font-bold">Add Food</Text>
          </View>
        </View>

        {/* Dining Hall Selector */}
        <View className="items-center mt-5">
          <View className="flex-row w-[95%] border border-gray-300 rounded-xl overflow-hidden">
            {/* Left label */}
            <View className="bg-white px-4 py-2 justify-center flex-[0.5 ] items-center">
              <Text className="text-base font-semibold">Dining Hall</Text>
            </View>

            {/* Right display only (no onPress here) */}
            <View className="bg-gray-300 px-5 py-2 flex-row items-center justify-between flex-1">
              <Text className="text-base text-gray-700 mr-1">{selectedHall}</Text>
              <Ionicons name="chevron-down" size={18} color="gray" />
            </View>
          </View>
        </View>

        {/* Choose Dining Hall Section */}
        <View className="mt-7 px-5">
          <Text className="text-lg font-bold">Choose Dining Hall</Text>
       <TouchableOpacity
  className="bg-gray-300 py-4 rounded-xl mt-2 px-4 flex-row items-center justify-between"
  onPress={() => setModalVisible(true)}
>
  <Text className="text-base font-bold">Select</Text>
  <Ionicons name="arrow-forward" size={20} color="black" />
</TouchableOpacity>
        </View>

        {/* Modal for selecting dining hall */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 bg-black/30 justify-center items-center">
            <View className="bg-white w-[80%] rounded-xl p-4">
              <Text className="text-lg font-bold mb-3">Select Dining Hall</Text>
              <FlatList
                data={diningHalls}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="py-3 border-b border-gray-200"
                    onPress={() => handleSelectHall(item)}
                  >
                    <Text className="text-base text-gray-800">{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                className="mt-3 items-center"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-red-500 font-semibold">Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
