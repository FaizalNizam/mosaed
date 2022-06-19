import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import back from '../assets/companies/back.png'
import { height, width } from '../constants/Dimension'

const Saved = () => {

    console.log('height', height * 0.033)
    console.log('width', width * 0.365)

    const handleBack = () => (
        navigation.goBack()
    )

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LinearGradient
                colors={['#387FDA', '#2ECBAA']}
                style={{ height: height * 0.204, flexDirection: 'row' }}
            >
                <Pressable onPress={handleBack}>
                    <Image source={back} style={{ marginTop: height * 0.033, marginLeft: 10 }} />
                </Pressable>
                <Text style={{ fontSize: 22, color: 'white', marginTop: height * 0.0254, marginLeft: width * 0.365 }}>Saved</Text>

            </LinearGradient>
        </View>
    )
}

export default Saved