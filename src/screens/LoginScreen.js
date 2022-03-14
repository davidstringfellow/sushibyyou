import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../firebase/firebase.config'; 
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
            <View style={styles.card}>
                <View>
                    <Text style={styles.headerText}>Sushi By You &#127843;</Text>
                    <Text style={styles.subHeaderText}>A place to share and view Sushi</Text>
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
        </KeyboardAvoidingView>
  )
}

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

export default LoginScreen