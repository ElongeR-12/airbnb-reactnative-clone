import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DestinationSearchScreen from '../screens/destinationSearch';
import GuestScreen from '../screens/Guests';
import PostScreen from '../screens/PostScreen';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();
const Router = () => {
    return (
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen 
                name={"Home"}
                component={HomeTabNavigator}
                options={{
                    headerShown: false
                }}
               />
               <Stack.Screen 
                name={"Destination Search"}
                component={DestinationSearchScreen}
                options={{
                    title: 'Search your Destination'
                }}
               />
               <Stack.Screen 
                name={"Guests"}
                component={GuestScreen}
                options={{
                    title: 'How many people?'
                }}
               />
               <Stack.Screen 
                name={"Details"}
                component={PostScreen}
                options={{
                    title: 'Book'
                }}
               />
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Router
