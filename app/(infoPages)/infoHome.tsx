import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import infoPageLogos from "../../assets/images/infoPageLogos";
import { Ionicons } from "@expo/vector-icons";

const infoHome = () => {
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
              <TouchableOpacity className="flex-row space-x-5 items-center">
                <Image
                  source={infoPageLogos.weightScaleLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Weight</Text>
              </TouchableOpacity>
            </View>
            <View className="bg-white p-3 w-full rounded-xl mt-4">
              <TouchableOpacity className="flex-row space-x-5 items-center">
                <Image
                  source={infoPageLogos.HeightScaleLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Height</Text>
              </TouchableOpacity>
            </View>

            <View className="bg-white p-3 w-full rounded-xl mt-4">
              <TouchableOpacity className="flex-row space-x-5 items-center">
                <Image
                  source={infoPageLogos.ageLogo}
                  style={{ width: 60, height: 60 }}
                />
                <Text className="font-bold text-2xl">Age</Text>
              </TouchableOpacity>
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

          <View className="tems-center">
            <Text>You will be able to update this at any time</Text>
          </View>
          <View className="flex-row space-x-7 items-cente mt-3">
            <TouchableOpacity className="bg-black w-32 h-[50] items-center justify-center rounded-xl">
              <Text className="text-white font-bold text-xl">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-black w-32 h-[50] items-center justify-center rounded-xl">
              <Text className="text-white font-bold text-xl">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default infoHome;
