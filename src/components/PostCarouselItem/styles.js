import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // padding:15,
        paddingBottom:15, 
        // paddingRight: 15,
        marginRight: 10,
        // paddingTop: -,       
        height: 125
    },
    innerContainer:{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        height:"100%",
        aspectRatio: 1,
        resizeMode: "cover",
    },
    bedrooms:{
        marginVertical: 10,
        color: "#5b5b5b",
    },
    descriptions:{
        fontSize: 15,
    },
    prices: {
        fontSize: 15,
        marginVertical: 10,
    },
    oldPrice:{
        color: "#5b5b5b",
        textDecorationLine: "line-through"
    },
    price:{
        fontWeight: "bold",
    },
    totalPrices:{
        color: "#5b5b5b",
        textDecorationLine: "underline"
    }
})

export default styles;