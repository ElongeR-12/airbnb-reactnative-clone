import React from 'react'
import { View, Image, Text, Pressable} from 'react-native'
import styles from './styles'
const DetailPage = ({post}) => {
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
            <Text>{post.description} total</Text>
            <Pressable
                style={{position:"absolute", right:3, bottom:2, zIndex:100, backgroundColor: "#e80784", width: "30%", padding: 10, borderRadius: 5}}
            >
                <Text style={{color: "white", fontSize: 15, fontWeight: "bold", textAlign:"center"}}>Reservez</Text>
            </Pressable>
        </View>
    )
}

export default DetailPage
