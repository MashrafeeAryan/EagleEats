import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarStyle: {
            backgroundColor: '#373737',
            // borderRadius: 10
        },
        tabBarActiveTintColor: '#F4C542',
        tabBarInactiveTintColor: '#fff',
    }}>
        <Tabs.Screen 
            name='index'
            options={{
                tabBarLabel: 'Home',
            
                //Change headerstyle. It is the yellow top part of the screen
                headerTitle: 'Eagle Eats +',
                headerStyle: {
                    backgroundColor: '#F4C542',
                    height: 80,
                },
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }

            }}
        />

        <Tabs.Screen 
            name='CalenderScreen'
            options={{title: 'Calender'}}
        />

        <Tabs.Screen 
            name='BonusBucksScreen'
            options={{title: 'Bonus Bucks'}}
        />

        <Tabs.Screen 
            name='ChallengeScreen'
            options={{title: 'Challenge'}}
        />

        <Tabs.Screen 
            name='ProfileScreen'
            options={{
                tabBarLabel: 'Profile',

                tabBarIcon: ({ color, size }) => ( <MaterialIcons name="person" size={30} color={color} />),

                headerTitle: 'Eagle Eats +',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                },

                // Here's the key part: a custom header background
                headerBackground: () => (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#F4C542' }} />
                    <View style={{ height: 5, backgroundColor: '#fff' }} />
                    <View style={{ height: 5, backgroundColor: '#F4C542' }} />
                </View>
                ),
                headerStyle: {
                height: 80, // Add space for the stripe
                },
            }}
        />      
    </Tabs>
  )
}

export default TabsLayout