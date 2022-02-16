import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import  Feather  from 'react-native-vector-icons/Feather'
const Voyages = () => {
  return (
    <View style={{padding:20, height: '100%', backgroundColor:"#fff"}}>
      <Text style={{lineHeight:30, fontSize:30, fontWeight: "bold", marginBottom: 20, color: "black"}}>Voyages</Text>
      <View style={{Width:Dimensions.get("screen").width - 40, marginRight:20, marginLeft:20,padding:20, borderWidth: 1, borderRadius:10, display: "flex", alignItems: "center", borderColor:"#C5CBCA", justifyContent: "center", marginVertical: 55}}>
            <Feather name="briefcase" size={30} color="#e80784"/>
            <Text style={{textAlign: "center", marginVertical:20, fontSize:15, fontWeight: "bold", color: "black"}}>Préparez-vous à découvrir le nouveau monde</Text>
            <Text style={{textAlign: "center"}}>Préparez un nouveau voyage et découvrez des hébergements à proximité de tous vos lieux préférés</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderColor:"#C5CBCA"}}>
      <Text style={{lineHeight:30, fontSize:25, fontWeight: "bold", marginBottom: 20, color: "black"}}>Destinations précédentes</Text>
      </View>
    </View>
  )
}

export default Voyages