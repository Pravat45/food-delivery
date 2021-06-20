import React, {useState, useRef} from 'react';
import {FlatList, StyleSheet, Text, View, Animated} from 'react-native';
import OnBoardingItem from './OnBoardingItem';
import data from '../data';
import Paginator from './Paginator';
import NextButton from './NextButton';

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold : 50}).current;

    const scrollToButton = () => {
        if(currentIndex < data.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1});
        } else {
            console.log('Last item');
        }
    }
    
  return (
    <View style={styles.container}>
      <View style={{flex :3}}>
      <FlatList
        data={data}
        renderItem={({item}) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{nativeEvent :{ contentOffset : {x : scrollX}}}],{
            useNativeDriver:false
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      </View>
      <Paginator data={data} scrollX={scrollX}/>
      <NextButton  scrollToButton={scrollToButton} percentage={(currentIndex + 1) * (100 / data.length)}/>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
