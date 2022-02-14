import { View, Text, Animated, Dimensions, PanResponder, Pressable } from 'react-native';
import React, { useRef } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient';
import Categories from '../../components/CategoriesComponent';
import { useNavigation, useRoute } from '@react-navigation/native';
const { height } = Dimensions.get('window');
const DrawerState = {
  Open : height - 300,
  Peek : height - 450,
  Closed : 0,
}
const animateMove = (
    y,
    toValue,
    callback,
  ) => {
    Animated.spring(y, {
      toValue: -toValue,
      tension: 10,
      useNativeDriver: true,
    }).start((finished) => {
  /* Optional: But the purpose is to call this after the the animation has finished. Eg. Fire an event that will be listened to by the parent component */
      finished && callback && callback();
    });
  };
  
const getNextState = (
    currentState,
    val,
    margin,
  ) => {
    switch (currentState) {
      case DrawerState.Peek:
        return val >= currentState + margin
          ? DrawerState.Open
          : val <= DrawerState.Peek - margin
          ? DrawerState.Closed
          : DrawerState.Peek;
      case DrawerState.Open:
        return val >= currentState
          ? DrawerState.Open
          : val <= DrawerState.Peek
          ? DrawerState.Closed
          : DrawerState.Peek;
      case DrawerState.Closed:
        return val >= currentState + margin
          ? val <= DrawerState.Peek + margin
            ? DrawerState.Peek
            : DrawerState.Open
          : DrawerState.Closed;
      default:
        return currentState;
    }
  };

const DrawerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const y = React.useRef(new Animated.Value(DrawerState.Closed)).current;
  /* Declare another variable to keep track of the state. We need a separate variable for this because y will also change whilst the user is in the process of moving the drawer up or down */
  const state = React.useRef(new Animated.Value(DrawerState.Closed)).current;
  const margin = 0.05 * height;
  const movementValue = (moveY) => height - moveY;

  /* This event is triggered when the animated view is moving. We want the user to be able to drag/swipe up or down and the drawer should move simultaneously. */
  const onPanResponderMove = (
    _,
    { moveY },
  ) => {
    const val = movementValue(moveY);
      animateMove(y, val);
  };

/* Here is where we snap the drawer to the desired state - open, peek or closed */
  const onPanResponderRelease = (
    _,
    { moveY },
  ) => {
    const valueToMove = movementValue(moveY);
    const nextState = getNextState(state._value, valueToMove, margin);
    state.setValue(nextState);
    animateMove(y, nextState);
  };

/* This determines if the responder should do something. In this scenario, it is set to true when the distance moved by Y is greater than or equal to 10, or lesser than or equal to -10. */
  const onMoveShouldSetPanResponder = (
    _,
    { dy },
  ) => Math.abs(dy) >= 1;

/* Here we're creating a panResponder object and assigning th event handlers to it. */
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder,
      onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
      onPanResponderMove,
      onPanResponderRelease,
    }),
  ).current;
  
  return (    
      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        colors={['#b43a92','#e80784']}
        style={[{width: '100%', height: '100%'}]}
      >
       <Text style={{fontSize:35, fontWeight:"500", marginLeft:20, color: 'white', marginTop: height - 420, width: '60%'}}>Que recherchez-vous?</Text> 
          <Animated.View
          style={[
            {
              width: '100%',
                height: height,
                backgroundColor: '#FFFFFF',
                borderRadius: 25,
                borderBottomLeftRadius:0, 
                borderBottomRightRadius:0,
                position: 'absolute',
                bottom: -height + 300,
                transform: [{ translateY: y }],
            },
          ]}
          {...panResponder.panHandlers}
          >
          <View
              style={[
                  {
                      marginRight: 'auto',
                      marginLeft: 'auto',
                      marginTop: 25,
                      marginBottom: 15,
                      height: 5,
                      width: 100,
                      backgroundColor: '#D3D3D3'
                  },
                ]}
          />
          
          <Pressable style={{position:"absolute", top:70, left:20}}
            onPress={()=>navigation.navigate("Destination Search")}
          >
              <AntDesign
                name="arrowleft" size={25} color={"#000"}
              />
          </Pressable>
          <View style={{display: 'flex', flexDirection:"row", justifyContent: 'center', marginVertical: 20}}>
            <Text style={{fontSize:20, color:"#000"}}>{route.params.city}</Text>
          </View>
         <Categories
          text1="Trouvez un hébergement"
          text2="Logements entiers, chambres et plus encore"
          uri="https://media-cdn.tripadvisor.com/media/photo-s/0d/e3/93/24/manafiafy-beach-rainforest.jpg"
         /> 
         <Categories
          text1="Trouvez un séjour longue durée"
          text2="Des séjours de 4 semaines et plus"
          uri="https://babel-voyages.com/~image/fit/public/articles%2Fecolodge_masoala-3.JPG/810x500"
         /> 
         <Categories
          text1="Trouvez une expérience"
          text2="Activités organisées par des habitants"
          uri="https://media.istockphoto.com/photos/isalo-afternoon-picture-id521185501?k=20&m=521185501&s=612x612&w=0&h=rHqIg78J24sZdzOAQH3cb3pu5WLl6PRI1b19pLDAu4g="
         /> 
        </Animated.View>
      </LinearGradient>
  );
};

export default DrawerScreen;
