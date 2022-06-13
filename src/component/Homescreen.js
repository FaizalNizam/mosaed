import { View, Text, SafeAreaView, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
import { height,width } from '../constants/Dimension'
import logo from '../assets/homescreen/logo.png'
import topleft from '../assets/homescreen/topleft.png'
import bottomright from '../assets/homescreen/bottomright.png'

const Homescreen = () => {
    console.log('height', width * 0.5);
    return (
        <LinearGradient colors={['#387FDA', '#2ECBAA']} style={{ height: height * 0.9999 }}>
            <Image
                source={topleft}
                style={{ position: 'absolute' }}
            />

            <Image
                style={{ alignSelf: 'center', marginTop: height * 0.332, position: 'absolute' }}
                source={logo}
            />
            <Image
                source={bottomright}
                style={{ marginLeft: width * 0.5, marginTop: height * 0.771, position: 'absolute' }}
            />
        </LinearGradient>

    )
}

export default Homescreen