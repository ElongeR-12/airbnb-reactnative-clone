import React from 'react'
import { View, Image, Text} from 'react-native'
import styles from './styles'
const Post = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri:'https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg' }}/>
            <Text style={styles.bedrooms}>
                1 bed 1 bedroom
            </Text>
            <Text style={styles.descriptions} numberOfLines={2}>
                Entire Flat. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of . 
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30</Text>
                / night
            </Text>
            <Text style={styles.totalPrices}>$230 total</Text>
        </View>
    )
}

export default Post
