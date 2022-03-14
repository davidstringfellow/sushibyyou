import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const DetailsScreen = ({navigation, route}) => {
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

export { DetailsScreen };