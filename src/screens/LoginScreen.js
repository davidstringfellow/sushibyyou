import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { auth, persistance } from '../firebase/firebase.config'; 
import { useNavigation } from '@react-navigation/core'



const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Home')
            }
        })

        return unsubscribe
    }, []);

    const handleSignUp = () => {
       auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials =>{
                const user = userCredentials.user;
            })
            
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <View >
            <View><Text style={styles.headerText}>Sushi By You &#127843;</Text></View>
            <View style={styles.loginBox}>
                <View>
                    <Text style={styles.subHeaderText}>Log In</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    card: {
        width: '80%',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBox: {
        borderColor: '#6c757d',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 20,
    },
    headerText: {
        color: '#000000',
        fontSize: 30,
        //justifyContent: 'center',
        //alignContent: 'center',
        textAlign: 'center',
        paddingBottom: 20,
    },
    subHeaderText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
    },
    inputContainer: {
        width: '90%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
        borderColor: '#6c757d',
        borderWidth: 1,
    },
    buttonContainer: { 
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        
        marginTop: 10,
    },
    button: {
        backgroundColor: '#007bff',
        minWidth: '100%',
        padding: 15,
        borderRadius: 5,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',

    },
    buttonOutline: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 5,
        padding: 15,
        borderRadius: 5,
        borderColor: '#007bff',
        borderWidth: 2,

    },
    buttonOutlineText: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#007bff'
    }
});

export default LoginScreen