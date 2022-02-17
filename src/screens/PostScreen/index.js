import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
// import places from '../../../assets/data/feed';
import DetailPage from '../../components/DetailsPage';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify'
import {listPosts} from "../../graphql/queries"
// const post = places[0]
const PostScreen = () => {
  const [place, setPlace] = useState([]);
  const route = useRoute();
    useEffect(()=>{
        const fetchPosts = async()=>{
            try {
                const postResult = await API.graphql(
                    graphqlOperation(listPosts)
                )
                const post = postResult.data.listPosts.items.find(place => place.id === route.params.postId)
                setPlace(post)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPosts();
    },[])
  
  
  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailPage post={place}/>
    </View>
  );
};

export default PostScreen;
