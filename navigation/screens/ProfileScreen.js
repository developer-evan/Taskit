import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        }}
    >
      <Text
      onPress={()=> alert('ProfileScreen')}
      style={{
        // textAlign:'center',
        // marginTop:70,
        // // fontSize:'large',
        // color:'blue',
        fontSize:26,
        fontWeight:'bold'
      }}>Profile</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})