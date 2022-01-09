import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 15,
        height: 30,
        width: 30,
        borderColor:"#676767",
        justifyContent: "center",
        alignItems: "center"
    },
    row:{
        flexDirection:"row", 
        justifyContent:"space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor:"lightgrey"
    }
})

export default styles;