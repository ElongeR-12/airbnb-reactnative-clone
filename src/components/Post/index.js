import React from 'react'
import { View, Image, Text} from 'react-native'
import styles from './styles'
const Post = ({post}) => {
    return (
        <View style={styles.container}>
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
            <Text style={styles.totalPrices}>${post.totalPrices} total</Text>
        </View>
    )
}

export default Post
