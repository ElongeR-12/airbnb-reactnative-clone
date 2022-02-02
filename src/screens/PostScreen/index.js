import { View, Text } from 'react-native';
import React from 'react';
import places from '../../../assets/data/feed';
import DetailPage from '../../components/DetailsPage';
import { useRoute } from '@react-navigation/native';
const post = places[0]
const PostScreen = () => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId)
  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailPage post={post}/>
    </View>
  );
};

export default PostScreen;
