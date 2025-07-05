import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import GuestOnly from '../../components/auth/GuestOnly'

const AuthLayout = () => {
  return (
    <GuestOnly>
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen 
            name='LoginScreen'

        />
        
        <Stack.Screen 
            name='SignUpScreen'
        />
    </Stack>
    </GuestOnly>
  )
}

export default AuthLayout