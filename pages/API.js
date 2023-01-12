import React from 'react'
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native'
import ResultAPI from '../elements/ResultAPI'

function API() {
    const style = StyleSheet.create({
        homeContainer: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }
    })

    async function getPostsFromAPI(){

    }

  return (
    <ScrollView contentContainerStyle={style.homeContainer}>
        <ResultAPI />
    </ScrollView>
  )
}

export default API