import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { auth } from '../firebase/firebase.config'
import { useNavigation } from '@react-navigation/core'

//import database from 'firebase/database'
//import * as ImagePicker from 'expo-image-picker';
/* 
let addImage = item => {
    database().ref('/items').push({
        name: item
    });
} */





const ImageScreen = (route) => {
    console.log(route);
    const navigation = useNavigation()
  
    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace('Login')
        })
        .catch(error => alert(error.message))
    }
  
    return (
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignOut}>
            <Text style={styles.button}>Sign Out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export { ImageScreen };