import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import infoPageLogos from "../../assets/images/infoPageLogos";
import { Ionicons } from "@expo/vector-icons";
import WeightComponent from "@/components/WeightComponent";
import HeightComponent from "@/components/HeightComponent";
import AgeComponent from "@/components/AgeComponent";
import { router } from "expo-router";

const infoHome = () => {

  const [showWeightComponent, setShowWeightComponent] = useState(false)
  const [showHeightComponent, setShowHeightComponent] = useState(false)
  const [showAgeComponent, setShowAgeComponent] = useState(false)
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center">
          <View className="absolute top-4 left-4">
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>

          <View className="mt-3">
            <Image
              source={infoPageLogos.thumbsUpManLogo}
              style={{ width: 190, height: 190 }}
            />
          </View>

          <View className="mt-3">
            <Text className="font-bold text-2xl">Enter your information</Text>
          </View>

          <View className="w-full p-7">
            <View className="bg-white p-3 w-full rounded-xl">
              <TouchableOpacity className="flex-row space-x-5 items-center"
                onPress={()=>{
                  setShowWeightComponent(true)
                }}
              >
                <Image
                  source={infoPageLogos.weightScaleLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Weight</Text>
              </TouchableOpacity>
              {showWeightComponent && <WeightComponent showWeightComponent={showWeightComponent} setShowWeightComponent={setShowWeightComponent}/>}
            </View>
            <View className="bg-white p-3 w-full rounded-xl mt-4">
              <TouchableOpacity className="flex-row space-x-5 items-center"
              onPress={()=>{setShowHeightComponent(true)}}
              >
                <Image
                  source={infoPageLogos.HeightScaleLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Height</Text>
              </TouchableOpacity>
              {showHeightComponent && <HeightComponent showHeightComponent={showHeightComponent} setShowHeightComponent={setShowHeightComponent} />}
            </View>

            <View className="bg-white p-3 w-full rounded-xl mt-4">
              <TouchableOpacity className="flex-row space-x-5 items-center"
              onPress={()=>{setShowAgeComponent(true)}}
              >
                <Image
                  source={infoPageLogos.ageLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Age</Text>
              </TouchableOpacity>
              {showAgeComponent && <AgeComponent showAgeComponent={showAgeComponent} setShowAgeComponent={setShowAgeComponent} />}
            </View>

            <View className="bg-white p-3 w-full rounded-xl mt-4">
              <TouchableOpacity className="flex-row space-x-5 items-center">
                <Image
                  source={infoPageLogos.genderLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Gender</Text>
              </TouchableOpacity>
            </View>

            <View className="bg-white p-3 w-full rounded-xl mt-4">
              <TouchableOpacity className="flex-row space-x-5 items-center">
                <Image
                  source={infoPageLogos.actvityLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Activity Level</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="items-center">
            <Text>You will be able to update this at any time</Text>
          </View>
          <View className="flex-row space-x-7 items-cente mt-3">
            <TouchableOpacity className="bg-black w-32 h-[50] items-center justify-center rounded-xl">
              <Text className="text-white font-bold text-xl">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-black w-32 h-[50] items-center justify-center rounded-xl" onPress={()=>{
              router.push("setTarget");
            }}>
              <Text className="text-white font-bold text-xl">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default infoHome;
