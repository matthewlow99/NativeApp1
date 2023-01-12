import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

function Login() {

    const styles = StyleSheet.create({
        loginContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '40%'
        },
        textInput: {
            display: 'flex',
            alignItems: 'center',

            borderColor: 'black',
            borderWidth: 1
        }
    })
  return (
        <View style={styles.loginContainer}>
            <View style={{width: '70%'}}>
                <Text>Username</Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={{width: '70%'}}>
                <Text>Password</Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            
            <Button title='Log in'/>
        </View>
        
    
  )
}

export default Login