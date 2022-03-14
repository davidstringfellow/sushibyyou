import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase/firebase.config'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('UploadImage')}>
          <Text style={{ fontWeight: '800'}}>Upload Image</Text>
        </TouchableOpacity>
    </View>
  )
}

export { HomeScreen }

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c7d9fc'
  },
  card: {
      width: '80%',
      backgroundColor: '#f0f0f0',
      padding: 5,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
          width: 1,
          height: 2,
      },
      shadowColor: '#000',
      shadowRadius: 2,
      shadowOpacity: 10,
      //Android only
      elevation: 3,
  },
  headerText: {
      color: '#000000',
      fontSize: 30,
      //justifyContent: 'center',
      //alignContent: 'center',
      textAlign: 'center',
  },
  subHeaderText: {
      color: '#000000',
      fontSize: 16,
      textAlign: 'center',
  },
  inputContainer: {
      width: '80%',
  },
  input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      borderColor: '#000',
      borderWidth: 1,
  },
  buttonContainer: { 
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      
      marginTop: 5,
  },
  button: {
      backgroundColor: '#8bd68f',
      minWidth: '100%',
      padding: 15,
      borderRadius: 10,
  },
  buttonText: {
      textAlign: 'center',
      fontWeight: '700',

  },
  buttonOutline: {
      backgroundColor: 'white',
      width: '100%',
      marginTop: 5,
      padding: 15,
      borderRadius: 10,
      borderColor: '#8bd68f',
      borderWidth: 2,

  },
  buttonOutlineText: {
      textAlign: 'center',
      fontWeight: '700',
  }
});