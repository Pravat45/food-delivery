import {Icon} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View, Animated} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

export default  NextButton = ({percentage, scrollToButton}) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);


  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );
  });

  
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center} />
        <Circle
          stroke="#E6E7E8"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />

        <Circle
          ref={progressRef}
          stroke="#ff0040"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
      </Svg>
      <TouchableOpacity onPress={scrollToButton} style={styles.button} activeOpacity={0.6}>
        <Icon
          name="arrow-forward-outline"
          style={{fontSize: 32, color: '#fff'}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#f4338f',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
