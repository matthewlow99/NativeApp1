import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-native'

function Menu({menuID, setMenuID}) {

    const nav = useNavigate();

    useEffect(() => {
        console.log(menuID)
    }, [menuID])

    function drawMenu(){
        switch(menuID){
            case 1:
                return (
                    <View style={style.textContainer}>
                        <Text onPress={() => {
                            nav('/api');
                            setMenuID(0);
                    }}>API</Text>
                        <Text>Users</Text>
                        <Text>Config</Text>
                    </View>
                )
            case 2:
                return (
                    <View style={style.textContainer}>
                        <Text>API Config</Text>
                        <Text>JWT Token</Text>
                        <Text>User Profile</Text>
                    </View>
                )
            default:
                return (<></>)

        }
    }

    const style = StyleSheet.create({
        menuContainer: {
            display: 'flex',
            position: 'absolute',
            backgroundColor: '#d1d1d1',
            width: '40%',
            height: '100%',
            left: 0,
            top: Platform.OS === 'android' ? 40 : 0,
            zIndex: 1,
        },
        textContainer: {
            display: 'flex',
            height: '30%',
            marginTop: '50%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    })

  return (
    <View style={style.menuContainer}>
        <Text style={{textAlign: 'right', marginRight: '10%', marginTop: '5%'}} onPress={() => {setMenuID(0)}}>Back</Text>
        {drawMenu()}
    </View>
  )
}

export default Menu