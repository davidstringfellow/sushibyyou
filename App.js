import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { ImageScreen } from './src/screens/ImageScreen';
import { TitleElement } from './src/screens/Common/TitleElement';
import { PageDrawer } from './src/screens/Common/NavigationDrawer';
import { NavStack } from './src/screens/Common/NavigationStack';


import PageTitle from './src/screens/Common/TitleElement';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <>
    <NavStack />
    </>
  
  );
}

const styles = StyleSheet.create({})
