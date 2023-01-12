import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-native'

function Header({setMenuID}) {
    
    const nav = useNavigate();

    const style = StyleSheet.create({
        menuContainer: {
            // position: 'absolute',
            alignSelf: 'stretch',
            height: '7%',
            backgroundColor: '#313141',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            // top: Platform.OS === 'android' ? 40 : 0,
            borderColor: 'blue',
            borderTopWidth: 1
        }
    })
  return (
    <View style={style.menuContainer}>
        <Button title='Menu' onPress={() => {setMenuID(1)}}></Button>
        <Text style={{color: 'white', fontWeight: '900'}} onPress={()=>{nav('/')}}>API PROTOTYPE</Text>
        <Button title='Config' onPress={() => {setMenuID(2)}}></Button>
    </View>
  )
}

export default Header