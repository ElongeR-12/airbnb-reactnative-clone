import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from "react-native-vector-icons/Fontisto"
const HomeScreen = () => {
    return (
        <View style={styles.homeContainer}>
            
            <ImageBackground source={require('../../../assets/images/imagebg.jpg')} style={styles.image}>
                <Pressable style={styles.searchButton} onPress={()=> console.warn("Search Btn clicked")}>
                        <Fontisto name="search" size={25} color={"#E40377"}/>
                        <Text style={styles.searchButtonText}>Où allez-vous?</Text>
                </Pressable>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Vous ne savez pas où partir ?</Text>
                    <Text style={styles.title}>Parfait.</Text>
                </View>
                <Pressable style={styles.button} onPress={()=> console.warn("Explore Btn clicked")}>
                    <Text style={styles.buttonText}>Je suis flexible</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen
