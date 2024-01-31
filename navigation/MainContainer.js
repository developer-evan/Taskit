import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const homeName = 'Home';
const settingsName = 'Settings';
const detailName = 'Tasks';
const profileName = 'Profile';


const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
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
                        else if (route.name === profileName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    // screenOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: {
                        fontSize: 10,
                        // fontWeight: 'bold',
                        paddingBottom: 10, // Corrected typo
                        // marginTop: 60,
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
                <Tab.Screen name={homeName} component={HomeScreen}
                    options={{
                        headerShown: false,
                    }
                    }
                />
                <Tab.Screen name={detailName} component={DetailScreen}
                    options={{
                        headerShown: false,
                    }
                    }
                />
                <Tab.Screen name={settingsName} component={SettingsScreen}
                    options={{
                        headerShown: false,
                    }
                    }
                />
                <Tab.Screen name={profileName} component={ProfileScreen} options={{
                    headerShown: false,
                }
                } />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;

const styles = StyleSheet.create({});
