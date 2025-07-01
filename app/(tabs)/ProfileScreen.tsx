import { useUser } from '@/hooks/useUser';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { account, storage } from '@/lib/appwrite';
import { ID } from 'react-native-appwrite';

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

	const {user, logout} = useUser()


	const [profileImage, setProfileImage] = useState(null)

	
	const pickImage = async () => {
  		console.log('start');

		// Ask for permission
		const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!permission.granted) {
			console.log('Permission denied');
			return;
		}

		// Open image library
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});

		// Handle result
		if (!result.canceled) {
			const selected = result.assets[0];

			console.log((selected))
			setProfileImage(selected); // temporary display

			
			const fileId = await uploadProfileImage(selected);
			if (fileId) {
			await saveImageIdToUser(fileId);
			}
		}
	};



	return (
		<SafeAreaView className='flex-1 bg-white'>

			
			<ScrollView className="pb-24">

				{/* Back + Settings Row */}
				<View className='flex-row justify-end px-4 mt-1 py-1'>
					<TouchableOpacity className='p-2 rounded-[8px]' onPress={() => {console.log('This is setting Page Button')}} >
						<Ionicons name="settings-sharp" size={24} color="black" />
					</TouchableOpacity>
				</View>


				

				{/* USER INFO */}
				<View className="flex-row items-center px-9 pb-4">
				<View className="relative mr-4">

					{/* Conditionally render the default profile pic or other pic if the user selects*/}
					{profileImage ? 
					(<Image source={{ uri: profileImage.uri }} className="w-[70px] h-[70px] rounded-full bg-gray-300"/>
					) : (
					<Image
					source={require('../../assets/images/hacker-icon.png')} // Replace with actual avatar image later
					className="w-[70px] h-[70px] rounded-full bg-gray-300"
					/>)}
					

					<TouchableOpacity onPress={pickImage}>
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




















// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { storage, account, databases, bucketID, databaseID, usersCollectionID, projectID } from '@/lib/appwrite';
// import { useUser } from '@/hooks/useUser';

// const ProfileScreen = () => {
//   const [userId, setUserId] = useState('');
//   const [profileImage, setProfileImage] = useState(null); // local state
//   const [imageUrl, setImageUrl] = useState(''); // from Appwrite


//   const {user} = useUser()
//   console.log(user)

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const user = await account.get();
//         setUserId(user.$id);

//         const userDoc = await databases.getDocument(databaseID, usersCollectionID, user.$id);
//         setImageUrl(userDoc.imageUrl || '');
//       } catch (err) {
//         console.log('Error fetching user', err);
//       }
//     };
//     fetchUser();
//   }, []);

//   const prepareImageFile = async (imageResult) => {
//     return {
//       name: imageResult.assets[0].fileName || 'profile.jpg',
//       size: imageResult.assets[0].fileSize || 500000,
//       type: imageResult.assets[0].mimeType || 'image/jpeg',
//       uri: imageResult.assets[0].uri,
//     };
//   };

//   const pickImage = async () => {
//     const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permission.granted) return Alert.alert('Permission denied');

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const fileData = await prepareImageFile(result);
//       const customFileID = `${userId}_image`;

//       try {
//         // Delete previous image if it exists
//         await storage.deleteFile(bucketID, customFileID).catch(() => {}); // ignore if not found

//         // Upload new image
//         const uploaded = await storage.createFile(bucketID, customFileID, fileData);

//         const url = `https://cloud.appwrite.io/v1/storage/buckets/${bucketID}/files/${uploaded.$id}/view?project=${projectID}`;
//         setImageUrl(url);
//         setProfileImage(fileData.uri);

//         // Save to user's document
//         await databases.updateDocument(databaseID, usersCollectionID, userId, {
//           imageUrl: url,
//         });

//         console.log('Image uploaded and user updated');
//       } catch (error) {
//         console.log('Upload failed', error);
//         Alert.alert('Upload failed', error.message);
//       }
//     }
//   };

//   return (
//     <View className="p-4">
//       <TouchableOpacity onPress={pickImage}>
//         <Image
//           source={
//             profileImage
//               ? { uri: profileImage }
//               : imageUrl
//               ? { uri: imageUrl }
//               : require('../../assets/images/hacker-icon.png')
//           }
//           style={{ width: 100, height: 100, borderRadius: 50 }}
//         />
//         <Text className="text-center mt-2">Tap to change</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ProfileScreen;
