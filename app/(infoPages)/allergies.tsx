import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
// import { View } from 'react-native';
import { router } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import infoPageLogos from '@/assets/images/infoPageLogos';

const allergies = [
  { label: 'Peanuts', key: 'peanuts', image: infoPageLogos.peanut_allergy },
  { label: 'Milk', key: 'milk', image: infoPageLogos.milk_allergy },
  { label: 'Fish', key: 'fish', image: infoPageLogos.fish_allergy},
  { label: 'Soy', key: 'soy', image:infoPageLogos.soy_allergy },
  { label: 'Wheat', key: 'wheat', image: infoPageLogos.wheat_allergy},
  { label: 'Eggs', key: 'eggs', image: infoPageLogos.egg_allergy},
  { label: 'Sesame', key: 'sesame', image: infoPageLogos.sesame_allergy },
  { label: 'Tree nuts', key: 'tree_nuts', image:infoPageLogos.tree_nuts_allergy },
  { label: 'Shellfish', key: 'shellfish', image: infoPageLogos.shellfish_allergy },
];

export default function AllergiesScreen() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

 const renderItem = ({ item }: { item: typeof allergies[0] }) => {
  const isActive = selected.includes(item.key);
  return (
    
    <TouchableOpacity
      onPress={() => toggle(item.key)}
      className={`flex-row items-center px-4 py-3 mb-3 rounded-xl w-[48%] ${
        isActive ? 'bg-gray-500'  : 'bg-white'
      }`}
    >
      {/* Yellow circle background */}
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#FFD500', // bright yellow
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={item.image}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
      </View>

      <Text
        className={`ml-3 font-semibold text-base ${
          isActive ? 'text-white font-bold text-l' : 'text-gray-800'
        }`}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};


  return (
    

    <View className="flex-1 bg-[#FAFAFA] px-5 py-6 pt-10">
        <TouchableOpacity
  onPress={() => router.back()}
//   className="absolute top-10 left-5 z-10"
>
  <AntDesign name="arrowleft" size={28} color="black" />
</TouchableOpacity>

 
      {/* Header Image */}
      <Image
        source={require('../../assets/images/infoPageLogos/allergies_top.png')}
        className="w-40 h-40 self-center mb-2"
        resizeMode="contain"
      />

      <Text className="text-center text-xl font-bold mb-4">Any Allergies?</Text>

      <FlatList
        data={allergies}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
        className='font-bold font-size'
      />

      <Text className="text-xs text-center text-gray-500 underline mb-4">
        Disclaimer: Always double check with the food service before consumption
      </Text>

      {/* Buttons */}
      <View className="flex-row justify-between">
        <TouchableOpacity className="flex-1 bg-gray-800 py-3 rounded-xl mr-2">
          <Text className="text-white text-center font-bold">Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-gray-800 py-3 rounded-xl ml-2">
          <Text className="text-white text-center font-bold">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
