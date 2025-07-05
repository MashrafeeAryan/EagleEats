import { useUser } from '@/hooks/useUser';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

const ProfileScreen = () => {
	const stats = [
		{ label: 'Nutri-Level', value: '5' },
		{ label: 'NutriBuds', value: '10' },
		{ label: 'Fuel-Streak', value: '200' },
		{ label: 'Bonus Bucks', value: '$150' },
	];

	const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const flames = ['🔥', '🔥', '❌', '🔥', '🔥', ''];

	const {user, logout} = useUser()
	const router = useRouter()

	return (
		<SafeAreaView className='flex-1 bg-white'>

			
			<ScrollView className="pb-24">

				{/* Back + Settings Row */}
				<View className='flex-row justify-end px-4 mt-1 py-1'>
					<TouchableOpacity className='p-2 rounded-[8px]' onPress={() => router.push('/(infoPages)/goalPage')} >
						<Ionicons name="settings-sharp" size={24} color="black" />
					</TouchableOpacity>
				</View>


				

				{/* USER INFO */}
				<View className="flex-row items-center px-9 pb-4">
				<View className="relative mr-4">

					<Image source={require('../../assets/images/hacker-icon.png')}  className="w-[70px] h-[70px] rounded-full bg-gray-300"/>
					
					<TouchableOpacity onPress={() => console.log('Pick Image')}>
						<View className="absolute bottom-0 right-0 bg-yellow-400 w-6 h-6 rounded-full border-2 border-white items-center justify-center">
							<Ionicons name="add" size={16} color="black"/>
						</View>
					</TouchableOpacity>

				</View>
				<View>
					<Text className="text-lg font-bold">{user.name}</Text>
					<Text className="text-gray-500 mt-1">@sonamshrpac</Text>
				</View>
				</View>

				{/* STATS */}
				<View className="flex-row justify-around py-4 border-t border-b border-gray-200">
				{stats.map((item, index) => (
					<View className="items-center" key={index}>
					<Text className="text-base font-bold">{item.value}</Text>
					<Text className="text-xs text-gray-600 mt-1 text-center">{item.label}</Text>
					</View>
				))}
				</View>

				{/* WEEKLY TRACKER */}
				<View className="pt-6 px-8">
				<View className="flex-row justify-between mb-2">
					{weekDays.map((day, index) => (
					<Text className="w-8 text-center text-sm text-gray-700" key={index}>
						{day}
					</Text>
					))}
				</View>

				<View className="flex-row justify-between">
					{flames.map((icon, index) => (
					<Text className="w-8 text-center text-xl" key={index}>
						{icon}
					</Text>
					))}
				</View>
				</View>

				{/* MESSAGE */}
				<Text className="mt-4 px-6 text-sm text-gray-800 text-center">
					“Hi User. You're on track 5/7 days this week. Keep it up!”
				</Text>



				{/* Temporary Logout Section*/}
				<Text className="text-xl font-semibold text-center mt-8">User Logged in</Text>
				<View className="flex-1 justify-center items-center">
					<Text className="text-2xl mb-6">Profile Page (for now)</Text>

					<TouchableOpacity
						className="bg-blue-500 py-3 px-6 rounded-lg items-center justify-center"
						onPress={logout}
					>
						<Text className="text-white text-base font-semibold">Logout</Text>
					</TouchableOpacity>

					<Text className="text-2xl mt-8">User Details</Text>
					<Text className="text-2xl mt-2">
						{user.email}
					</Text>
				</View>

			</ScrollView>
		</SafeAreaView>
	);
};

export default ProfileScreen;









// import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import infoPageLogos from "../../assets/images/infoPageLogos";
// import { Ionicons } from "@expo/vector-icons";
// import WeightComponent from "@/components/WeightComponent";
// import HeightComponent from "@/components/HeightComponent";
// import AgeComponent from "@/components/AgeComponent";

// const goalPage = () => {

//   const [showWeightComponent, setShowWeightComponent] = useState(false)
//   const [showHeightComponent, setShowHeightComponent] = useState(false)
//   const [showAgeComponent, setShowAgeComponent] = useState(false)
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View className="items-center flex-1">
// 		  {/* Arrow */}
//           <View className="absolute top-4 left-4">
//             <Ionicons name="arrow-back" size={24} color="black" />
//           </View>

// 		  {/* ThumbsUp Image */}
//           <View className="mt-3">
//             <Image
//               source={infoPageLogos.thumbsUpManLogo}
//               style={{ width: 190, height: 190 }}
//             />
//           </View>

		
//           <View className="mt-3">
//             <Text className="font-bold text-2xl">Enter your information</Text>
//           </View>

// 		  {/* Selection Boxes */}
//           <View className="w-full p-7">
//             <View className="bg-white p-3 w-full rounded-xl">
//               <TouchableOpacity className="flex-row space-x-5 items-center"
//                 onPress={()=>{
//                   setShowWeightComponent(true)
//                 }}
//               >
//                 <Image
//                   source={infoPageLogos.weightScaleLogo}
//                   style={{ width: 60, height: 60 }}
//                 />
//                 <Text className="font-bold text-2xl">Weight</Text>
//               </TouchableOpacity>
//               {showWeightComponent && <WeightComponent showWeightComponent={showWeightComponent} setShowWeightComponent={setShowWeightComponent}/>}
//             </View>
            
//             <View className="bg-white p-3 w-full rounded-xl mt-4">
//               <TouchableOpacity className="flex-row space-x-5 items-center"
//               onPress={()=>{setShowHeightComponent(true)}}
//               >
//                 <Image
//                   source={infoPageLogos.HeightScaleLogo}
//                   style={{ width: 60, height: 60 }}
//                 />
//                 <Text className="font-bold text-2xl">Height</Text>
//               </TouchableOpacity>
//               {showHeightComponent && <HeightComponent showHeightComponent={showHeightComponent} setShowHeightComponent={setShowHeightComponent} />}
//             </View>

//             <View className="bg-white p-3 w-full rounded-xl mt-4">
//               <TouchableOpacity className="flex-row space-x-5 items-center"
//               onPress={()=>{setShowAgeComponent(true)}}
//               >
//                 <Image
//                   source={infoPageLogos.ageLogo}
//                   style={{ width: 60, height: 60 }}
//                 />
//                 <Text className="font-bold text-2xl">Age</Text>
//               </TouchableOpacity>
//               {showAgeComponent && <AgeComponent showAgeComponent={showAgeComponent} setShowAgeComponent={setShowAgeComponent} />}
//             </View>

//             <View className="bg-white p-3 w-full rounded-xl mt-4">
//               <TouchableOpacity className="flex-row space-x-5 items-center">
//                 <Image
//                   source={infoPageLogos.genderLogo}
//                   style={{ width: 60, height: 60 }}
//                 />
//                 <Text className="font-bold text-2xl">Gender</Text>
//               </TouchableOpacity>
//             </View>

//             <View className="bg-white p-3 w-full rounded-xl mt-4">
//               <TouchableOpacity className="flex-row space-x-5 items-center">
//                 <Image
//                   source={infoPageLogos.actvityLogo}
//                   style={{ width: 60, height: 60 }}
//                 />
//                 <Text className="font-bold text-2xl">Activity Level</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

		  
			
//           <View className="items-center">
//             <Text>You will be able to update this at any time</Text>
//           </View>
//           <View className="flex-row space-x-7 items-cente mt-3">
//             <TouchableOpacity className="bg-black w-32 h-[50] items-center justify-center rounded-xl">
//               <Text className="text-white font-bold text-xl">Skip</Text>
//             </TouchableOpacity>
//             <TouchableOpacity className="bg-black w-32 h-[50] items-center justify-center rounded-xl">
//               <Text className="text-white font-bold text-xl">Next</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default goalPage;