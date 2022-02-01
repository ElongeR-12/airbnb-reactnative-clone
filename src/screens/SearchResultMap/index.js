import { View, FlatList, useWindowDimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';
const SearchResultMaps = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70, minimumViewTime: 300 });
  const onViewChanged = useRef(async ({viewableItems})=>{
    if(viewableItems.length > 0){
      const selectedPlace = await viewableItems[0].item;
      console.log(selectedPlace);
      setSelectedPlaceId(selectedPlace.id)
    }
  })
  useEffect(()=>{
    if (!selectedPlaceId || !flatlist){
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index: index})
    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion({region: region})
  },[selectedPlaceId])
  return (
    <View style={{width: '100%', height:'100%'}}>
       <MapView
       ref={map}
        style={{width: '100%', height:'100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => 
        <CustomMarker 
          key={place.id}
          coordinate={place.coordinate}
          price={place.newPrice}
          isSelected={place.id === selectedPlaceId}
          onPress={()=> setSelectedPlaceId(place.id)}
        />)}
      </MapView>
      <View style={{position: 'absolute', bottom:50}}>
        <FlatList 
          ref={flatlist}
          data={places}
          renderItem={({item})=> <PostCarouselItem post={item}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultMaps;
