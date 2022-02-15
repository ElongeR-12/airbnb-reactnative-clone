import {Dimensions } from 'react-native'
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
            },
            tabBarLabelStyle: { 
                fontSize: 18,
                textTransform:"capitalize" 
            },
            tabBarIndicatorContainerStyle:{
                width: Dimensions.get("screen").width - 20,
                marginRight: 10,
                marginLeft: 10,
                borderBottomWidth: 1,
            },
        }}
    >
      <Tab.Screen
        name={"messages"}
        component={Messages}
      />
      <Tab.Screen
        name={"notifications"}
        component={Notifications}
      />
    </Tab.Navigator>
  )
}

export default MessagesTabNavigators