// Importing React and useState hook for state management
import React, { useState } from 'react';

// Importing AntDesign icon library for using icons (like back arrow)
import AntDesign from '@expo/vector-icons/AntDesign';

// Importing navigation functionality from expo-router
import { router } from 'expo-router';

// React Native components used in this screen
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

// Importing the image assets (allergies, preferences, etc.)
import infoPageLogos from '@/assets/images/infoPageLogos';

// Array of allergy options with label, key, and image icon reference
const allergies = [
  { label: 'Peanuts', key: 'peanuts', image: infoPageLogos.peanut_allergy },
  { label: 'Milk', key: 'milk', image: infoPageLogos.milk_allergy },
  { label: 'Fish', key: 'fish', image: infoPageLogos.fish_allergy },
  { label: 'Soy', key: 'soy', image: infoPageLogos.soy_allergy },
  { label: 'Wheat', key: 'wheat', image: infoPageLogos.wheat_allergy },
  { label: 'Eggs', key: 'eggs', image: infoPageLogos.egg_allergy },
  { label: 'Sesame', key: 'sesame', image: infoPageLogos.sesame_allergy },
  { label: 'Tree nuts', key: 'tree_nuts', image: infoPageLogos.tree_nuts_allergy },
  { label: 'Shellfish', key: 'shellfish', image: infoPageLogos.shellfish_allergy },
];

// Main functional component for the screen
export default function AllergiesScreen() {
  // Local state to store selected allergies (as keys)
  const [selected, setSelected] = useState<string[]>([]);

  // Function to toggle selection of an allergy
  const toggle = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Function that renders each allergy item in the list
  const renderItem = ({ item }: { item: typeof allergies[0] }) => {
    const isActive = selected.includes(item.key); // Check if the item is selected

    return (
      // Touchable wrapper for toggling allergy on tap
      <TouchableOpacity
        onPress={() => toggle(item.key)}
        className={`flex-row items-center px-4 py-3 mb-3 rounded-xl w-[48%] ${
          isActive ? 'bg-gray-500' : 'bg-white'
        }`} // Dynamic background color based on selection
      >
        {/* Yellow circular icon background */}
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25, // Makes it a perfect circle
            backgroundColor: '#FFD500', // Bright yellow color
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Icon representing the allergy (peanut, milk, etc.) */}
          <Image
            source={item.image}
            style={{ width: 80, height: 80 }}
            resizeMode="contain" // Ensures the image doesn't stretch or get cut off
          />
        </View>

        {/* Text label of the allergy */}
        <Text
          className={`ml-3 font-semibold text-base ${
            isActive ? 'text-white font-bold text-l' : 'text-gray-800'
          }`} // Changes text style when selected
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  // Rendered component tree (main UI)
  return (
    <View className="flex-1 bg-[#FAFAFA] px-5 py-6 pt-10">
      {/* Back navigation arrow at the top left */}
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={28} color="black" />
      </TouchableOpacity>

      {/* Top image banner (e.g., person with allergies) */}
      <Image
        source={infoPageLogos.preferences_allergies_top}
        className="w-40 h-40 self-center mb-2"
        resizeMode="contain"
      />

      {/* Screen title */}
      <Text className="text-center text-xl font-bold mb-4">Any Allergies?</Text>

      {/* FlatList to render allergy options in 2 columns */}
      <FlatList
        data={allergies} // Source of data
        renderItem={renderItem} // Render logic for each item
        keyExtractor={(item) => item.key} // Unique key per item
        numColumns={2} // Number of columns
        columnWrapperStyle={{ justifyContent: 'space-between' }} // Even spacing between items
        contentContainerStyle={{ paddingBottom: 20 }} // Extra space at bottom
        className='font-bold font-size' // Extra styling (if defined globally)
      />

      {/* Disclaimer below the allergy options */}
      <Text className="text-xs text-center text-gray-500 underline mb-4">
        Disclaimer: Always double check with the food service before consumption
      </Text>

      {/* Navigation buttons at the bottom (Skip and Next) */}
      <View className="flex-row justify-between">
        {/* Skip Button (no navigation logic yet) */}
        <TouchableOpacity className="flex-1 bg-gray-800 py-3 rounded-xl mr-2">
          <Text className="text-white text-center font-bold">Skip</Text>
        </TouchableOpacity>

        {/* Next Button (navigates to preferences screen) */}
        <TouchableOpacity
          onPress={() => {
            router.push('/preferences'); // Go to preferences page
          }}
          className="flex-1 bg-gray-800 py-3 rounded-xl ml-2"
        >
          <Text className="text-white text-center font-bold">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
