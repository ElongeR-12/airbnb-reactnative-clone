import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/SearchResult';
import SearchResultMaps from '../screens/SearchResultMap';
const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigtors = () => {
  return (
    <Tab.Navigator
        screenOptions={{ 
            tabBarActiveTintColor: "#f15454",
            tabBarIndicatorStyle: { 
                backgroundColor:"#f15454"
            }
        }}
    >
      <Tab.Screen
        name={"list"}
        component={SearchResultScreen}
      />
      <Tab.Screen
        name={"map"}
        component={SearchResultMaps}
      />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigtors;
