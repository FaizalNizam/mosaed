import { Pressable, View } from 'react-native'
//import Animated, { EasingNode, withRepeat, withTiming } from 'react-native-reanimated'
//import { Animated, Easing, withRepeat, withTiming } from 'react-native'
import React, { useEffect } from 'react'
import { Circle, Text, TextPath, TSpan, G, Svg } from 'react-native-svg';
import img from '../assets/circlecropphoto.png'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, Easing } from 'react-native-reanimated';

const Round = () => {

    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });

    const animation = (v) => {
        // spinValue.value = withTiming(v*360,{duration:7000},() => animation(v+1))
    }

    const spinValue = useSharedValue(0)
    //spinValue.value = withTiming(360,{duration:7000},animation(2))


    /*     useEffect(() => (
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 7000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            ).start()
        ), []) */

    useEffect(() => {
        spinValue.value = withTiming(3600, {
            duration: 300000,
            easing: Easing.linear,
        })
    }, []);

    useEffect(() => {

        /* setTimeout(() => {
            spinValue.value = withRepeat(withTiming(100), 0, true)
        }, 2000); */
    }, [])


    const reverseSpin = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${spinValue.value}deg` }],
        };
    });

    /*     const spin = spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })  */

    /* const reverseSpin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg']
    }) */


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <Pressable onPressIn={() => {
                rotation.value = withRepeat(withTiming(10), 6, true)
            }} style={{ backgroundColor: "blue", height: 50, width: 100 }}>

            </Pressable>
            {/* <View style={[{backgroundColor:"red",height:100,width:100},reverseSpin]}>

</View> */}
            <Animated.View style={[{ backgroundColor: "red", height: 100, width: 100 }, animatedStyle]} />
            <Animated.Image
                style={[{ width: 200, height: 200,/*  transform: [{ rotate: spin }],  */position: 'absolute', marginTop: 200 }, reverseSpin]}
                source={img}
            />

            {/*  <Animated.View style={[{ alignItems: 'center', position: 'absolute', marginTop: 160},reverseSpin]}>
                <Svg position="absolute" height="350" width="250" viewBox="0 0 300 300">
                    <G id="circle">
                        <Circle
                            r={110}
                            x={150}
                            y={110}
                            //fill="none"
                            //stroke="#fff"
                            //strokeWidth={10}
                            transform="rotate(-150)"
                        />
                    </G>

                    <Text fill="red" fontSize="20">
                        <TextPath href="#circle">
                            <TSpan dx="0" dy={-20}>
                                Nothing is true everything is permitted, Nothing is true everything is permitted.
                            </TSpan>
                        </TextPath>
                    </Text>
                </Svg>
            </Animated.View> */}

        </View>
    )
}

export default Round