import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // npm install react-native-vector-icons --save

//screens

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailScreen from './screens/DetailScreen';
import { options } from 'cli';

//screen names
const homeName = 'Home';
const settingsName = 'Settings';
const detailName = 'Detail';

const Tab = createBottomTabNavigator();




const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            // initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {   
                        let iconName;
                        if (route.name === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (route.name === detailName) {
                            iconName = focused ? 'list' : 'list-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: {
                        fontSize: 10,
                        // fontWeight: 'bold',
                        paddingBotton: 10,
                    },
                    style: {
                        // backgroundColor: 'white',
                        // borderTopWidth: 1,
                        // borderTopColor: 'grey',
                        // paddingVertical: 10,
                        // height: 60,
                        padding: 10,
                        height: 70,
                    },



                }}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />                
                <Tab.Screen name={detailName} component={DetailScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer

const styles = StyleSheet.create({})