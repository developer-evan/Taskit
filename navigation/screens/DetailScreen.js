import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = ({navigation}) => {
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        }}
    >
      <Text
      onPress={()=> alert('DetailScreen')}
      style={{
        // textAlign:'center',
        // marginTop:70,
        // // fontSize:'large',
        // color:'blue',
        fontSize:26,
        fontWeight:'bold'
      }}>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})