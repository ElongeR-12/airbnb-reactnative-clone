import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, Pressable} from 'react-native'
import styles from './styles'

const Post = ({post}) => {
    const navigation = useNavigation();
    const goToPageDetails = ()=>{
        navigation.navigate('Details', {postId: post.id})
    }
    return (
        <Pressable 
            onPress = {goToPageDetails}
        style={styles.container}>
            <Image style={styles.image} source={{ uri: post.image}}/>
            <Text style={styles.bedrooms}>
                {post.bed} bed {post.bedroom} bedroom
            </Text>
            <Text style={styles.descriptions} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.price}>  ${post.newPrice}</Text>
                / night
            </Text>
            <Text style={styles.totalPrices}>${post.newPrice * 7} total</Text>
        </Pressable>
    )
}

export default Post
