import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = ({navigation}) => {
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        }}
    >
      <Text
      onPress={()=> alert('SettingsScreen')}
      style={{
        // textAlign:'center',
        // marginTop:70,
        // // fontSize:'large',
        // color:'blue',
        fontSize:26,
        fontWeight:'bold'
      }}>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})