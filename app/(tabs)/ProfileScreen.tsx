import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
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

	const router = useRouter()

	return (
		<SafeAreaView className='flex-1 bg-white'>

			
			<ScrollView className="pb-24">

				{/* Back + Settings Row */}
				<View className='flex-row justify-end px-4 mt-1 py-1'>
					<TouchableOpacity className='p-2 rounded-[8px]' onPress={() => {router.replace('../(auth)/LoginScreen')}} >
						<Ionicons name="settings-sharp" size={24} color="black" />
					</TouchableOpacity>
				</View>


				

				{/* USER INFO */}
				<View className="flex-row items-center px-9 pb-4">
				<View className="relative mr-4">
					<Image
					source={require('../../assets/images/hacker-icon.png')} // Replace with actual avatar image later
					className="w-[70px] h-[70px] rounded-full bg-gray-300"
					/>
					<View className="absolute bottom-0 right-0 bg-yellow-400 w-5 h-5 rounded-full border-2 border-white items-center justify-center">
						<Ionicons name="add" size={16} color="black"/>
					</View>
				</View>
				<View>
					<Text className="text-lg font-bold">Sonam Sherpa</Text>
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
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProfileScreen;