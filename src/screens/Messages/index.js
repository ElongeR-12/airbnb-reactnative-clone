import { View, Text } from 'react-native'
import React from 'react'

const Messages = () => {
  return (
    <View style={{height: '100%', paddingTop: 30, paddingLeft: 30, paddingRight: 30, backgroundColor:"#fff"}}>
      <Text style={{fontSize:20}}>Vous n'avez pas de nouveau message</Text>
    </View>
  )
}

export default Messages