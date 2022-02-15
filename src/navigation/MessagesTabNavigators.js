import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Messages from '../screens/Messages';
import Notifications from '../screens/Notification.js';
const Tab = createMaterialTopTabNavigator();
const MessagesTabNavigators = () => {
    
  return (
    <Tab.Navigator
        screenOptions={{ 
            tabBarActiveTintColor: "#000",
            tabBarIndicatorStyle: { 
                backgroundColor:"#000"
            }
        }}
    >
      <Tab.Screen
        name={"message"}
        component={Messages}
      />
      <Tab.Screen
        name={"notification"}
        component={Notifications}
      />
    </Tab.Navigator>
  )
}

export default MessagesTabNavigators