import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import HomeScreen from '../screens/home';
import ExploreNavigator from './ExploreNavigator'
import Favoris from '../screens/Favoris'
import Voyages from '../screens/Voyages'
import MessagesTabNavigators from './MessagesTabNavigators'
const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#f15454",
                tabBarContainer: {padding: 10},
                tabBarLabelStyle:{fontWeight: "normal", fontSize:15, marginBottom: 5},
                tabBarStyle:{height: 60, padding: 5},
                headerShown: false,
                headerTitleStyle:{lineHeight:30, fontSize:30, fontWeight: "bold", color: "black"},
            }}
        >
            <Tab.Screen
                name={"Explore"}
                component={ExploreNavigator} 
                // component={DrawerScreen} 
                labelStyle={{fontWeight: "bold", fontSize: 30}}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="search" size={25} color={color}/>
                    )
                }}
           /> 
           <Tab.Screen
                name={"Saved"}
                component={Favoris} 
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="heart-o" size={25} color={color}/>
                    )
                }}
           /> 
           <Tab.Screen
                name={"Airbnb"}
                component={Voyages} 
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="airbnb" size={25} color={color}/>
                    )
                }}
           /> 
           <Tab.Screen
                name={"Boite de réception"}
                component={MessagesTabNavigators}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="message-square" size={25} color={color}/>
                    ),
                    headerShown: true
                }}
           /> 
           <Tab.Screen
                name={"Profile"}
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <EvilIcons name="user" size={25} color={color}/>
                    )
                }}
           /> 
        </Tab.Navigator>
    )
}

export default HomeTabNavigator
