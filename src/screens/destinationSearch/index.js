import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import SuggestionRow from './SuggestionRow'

const DestinationSearchScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='où alllez-vous?'
                    onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate("Guests");
                    }}
                    fetchDetails
                    style={{
                        textInput: styles.textInput
                    }}
                    query={{
                    key: 'AIzaSyDRhfcK0mKJ3iX7rXNeSojWOlau9wOLq4k',
                    language: 'en',
                    types: '(cities)'
                    }}
                    suppressDefaultStyles
                    renderRow={(item)=> <SuggestionRow item={item}/>}
                />
        </View>
    )
}

export default DestinationSearchScreen
