import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

function Home() {
    const style = StyleSheet.create({
        homeContainer: {
            display: 'flex',
            height: '93%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
  return (
    <View style={style.homeContainer}>
        <Text>This is my Home Page</Text>
    </View>
  )
}

export default Home