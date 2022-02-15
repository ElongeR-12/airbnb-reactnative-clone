import { View, Text, Pressable, Image, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Categories = ({text1, text2, uri}) => {
  const navigation = useNavigation();
  return (
    <Pressable
        style={[{
          display: 'flex', 
          flexDirection: 'row', 
          alignItems:"center",
          justifyContent:"space-between",
          marginRight: 30,
          marginLeft: 30,
          width: Dimensions.get("screen").width - 60,
          height: 100,
          marginVertical: 15,
          padding:10
        },
        {
          borderWidth: 1,
          borderRadius: 4,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 3,
        }
      ]}
      onPress={()=>navigation.navigate("Guests")}
    >
        <View >
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                lineHeight: 25
              }}
            >
              {text1}
            </Text>
            <Text style={{
              width:220
            }}>
              {text2}
            </Text>
        </View>
        <Image
            style={{ height:"100%", aspectRatio:1, resizeMode:"cover", borderRadius: 5}}
            source={{uri: uri}}
        />
    </Pressable>
  )
}

export default Categories