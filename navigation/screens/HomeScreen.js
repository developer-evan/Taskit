import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        }}
    >
      <Text
      onPress={()=> alert('HomeScreen')}
      >HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})