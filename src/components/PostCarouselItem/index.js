import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, Text, Pressable, useWindowDimensions} from 'react-native'
import styles from './styles'
const PostCarouselItem = ({post}) => {
    const width = useWindowDimensions().width;
    const navigation = useNavigation();
    const goToDetails = ()=>{
        navigation.navigate('Details', {postId: post.id});
    }
    return (
        <Pressable 
        onPress={goToDetails}
        style={[styles.container, {width: width - 60}, 
            {
                borderBottomWidth: 10,
                // paddingBottom: -8,
          borderRightWidth: 7,
          borderRadius: 15,
          borderColor: '#c71585',
          shadowColor: '#c71585',
          shadowOffset: { width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 5,
            }
        ]}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={{ uri: post.image}}/>
                <View style={{flex: 1, marginHorizontal: 10}}>
                    <Text style={styles.bedrooms}>
                        {post.bed} bed {post.bedroom} bedroom
                    </Text>
                    <Text style={styles.descriptions} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>
                    <Text style={styles.prices}>
                        <Text style={styles.price}>${post.newPrice}</Text>
                        / night
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default PostCarouselItem
