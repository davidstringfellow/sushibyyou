// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../HomeScreen';
import LoginScreen from '../LoginScreen';
import { ImageScreen } from '../ImageScreen';

const Stack = createNativeStackNavigator();

function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />   
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> 
        <Stack.Screen options={{ headerShown: false }} name="UploadImage" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { NavStack };