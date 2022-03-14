import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
//import database from 'firebase/database'
//import * as ImagePicker from 'expo-image-picker';
/* 
let addImage = item => {
    database().ref('/items').push({
        name: item
    });
} */



const ImageScreen = ({navigation, route}) => {
    console.log(route);
    return (
        <View style={styles.container}>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export { ImageScreen };