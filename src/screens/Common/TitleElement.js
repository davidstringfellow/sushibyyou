import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const TitleElement = () => {
    return (
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Sushi By You &#127843;</Text>
          </View>
        </View>
    )}; 

    const styles = StyleSheet.create({
        header: {
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        },
        headerText: {
          color: '#000000',
          fontSize: 20,
        },
      });
      
export { TitleElement };