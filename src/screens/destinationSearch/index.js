import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const DestinationSearchScreen = () => {
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="où alllez-vous?"
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={searchResults}
                renderItem={({item})=>(
                    <Pressable style={styles.row}
                        onPress={()=> navigation.navigate("Guests")}
                    >
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                    )}
            />
        </View>
    )
}

export default DestinationSearchScreen
