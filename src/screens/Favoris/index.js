import { View, Text } from 'react-native'
import React from 'react'

const Favoris = () => {
  return (
    <View style={{padding:20}}>
      <Text style={{lineHeight:30, fontSize:30, fontWeight: "bold", marginBottom: 20, color: "black"}}>Favoris</Text>
      <Text style={{fontSize:18,}}>Collectez les options des hébergements et les activités en cliquant sur le coeur</Text>
    </View>
  )
}

export default Favoris