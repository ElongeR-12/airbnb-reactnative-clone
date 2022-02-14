import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    homeContainer:{
        // position: 'relative',
        // yscrollable: 'scroll'
    },
    image: {
        width: "100%",
        height: 750,
        resizeMode:"cover",
        justifyContent: "center",
    },
    titleContainer:{
        marginTop: 250,
        marginBottom: 20
    },
    title: {
        fontSize:30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        width: "70%",
        marginLeft:"auto",
        marginRight:"auto",
    },
    button:{
        backgroundColor:"#fff",
        width: 200,
        height:50,
        marginRight:"auto",
        marginLeft:"auto",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:20,
    },
    buttonText:{
        color: "rgb(190, 36, 225);",
        fontWeight: "bold",
        fontSize:20
    },
    searchButton:{
        backgroundColor:"#fff",
        width: Dimensions.get('screen').width - 20,
        height:50,
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
        alignItems: "center",
        borderRadius:25,
        position: "absolute",
        top:20,
        zIndex:100
    },
    searchButtonText:{
        fontWeight: "bold",
        marginLeft: 10,
        fontSize:18
    },
})

export default styles;