import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
    >
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
            options={{title: 'Profile'}}
        />
    </Tabs>
  )
}

export default TabsLayout