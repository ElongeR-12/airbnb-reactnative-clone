import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import SearchResultScreen from '../screens/SearchResult';
const Stack = createStackNavigator();
const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
            name={"Welcome"}
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
       /> 
       <Stack.Screen
            name={"SearchResults"}
            component={SearchResultScreen}
            options={{
                title: "Search your destination"
            }}
       />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
