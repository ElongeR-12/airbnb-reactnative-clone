import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify';
const ProfileScreen = () => {
    const logout = async () =>{
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
  return (
    <View
        style={{
            height: '100%',
            display: 'flex',
            backgroundColor:"#fff",
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
      <Pressable
        style={{
            width: '100%',
            alignItems: 'center', 
            justifyContent: 'center', 
            height: 40, 
            backgroundColor: '#c3c3c3'
        }}
        onPress={logout}
      >
          <Text>Loug out</Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen