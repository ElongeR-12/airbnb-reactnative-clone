/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native'
import Entype from "react-native-vector-icons/Entypo"
import HomeScreen from './src/screens/home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/destinationSearch';
import GuestScreen from './src/screens/Guests';
import Router from './src/navigation/Router';
const App: () => Node = () => {

  return (
    <>
      {/* <HomeScreen/> */}
      {/* <Post/> */}
      {/* <SearchResultScreen/> */}
      {/* <DestinationSearchScreen/> */}
      {/* <GuestScreen/> */}
      <Router/>
    </>
  );
};

export default withAuthenticator(App);
