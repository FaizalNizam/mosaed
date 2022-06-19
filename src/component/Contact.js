import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import threedot from '../assets/contact/threedot.png'
import bookmark from '../assets/contact/bookmark.png'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-gesture-handler'
import Buttons from './Button'
import { height,width } from '../constants/Dimension'

const Contact = ({ navigation }) => {

console.log('height',height*0.044)
console.log('width',width*0.038)

    const handleSaved = () => (
        navigation.navigate('Saved')
    )

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LinearGradient
                colors={['#2ECBAA', '#387FDA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: height*0.31 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image source={threedot} style={{ marginTop: height*0.033, marginLeft: width*0.026 }} />
                    <Text style={{ fontSize: 22, marginTop: height*0.028, fontWeight: '500', color: 'white' }}>Contact us</Text>
                    <Pressable onPress={handleSaved}>
                        <Image source={bookmark} style={{ marginTop: height*0.033, marginRight: width*0.026 }} />
                    </Pressable>
                </View>
                <Text style={{ fontSize: 18, marginTop: height*0.132, textAlign: 'center', color: 'white' }}>
                    We Are Here to Support {'\n'} You.
                </Text>
            </LinearGradient>

            <View style={{ alignItems: 'center', marginTop: height*0.044 }}>

                <TextInput
                    style={{ height: height*0.057, width: width*0.73, elevation: 10, shadowColor: '#707070', backgroundColor: 'white', borderRadius: 10, paddingLeft: width*0.038 }}
                    placeholder='Email'
                />
                <TextInput
                    style={{ height: height*0.057, width: width*0.73, elevation: 10, shadowColor: '#707070', backgroundColor: 'white', borderRadius: 10, marginTop: 20, paddingLeft: width*0.038 }}
                    placeholder='Subject'
                />
                <TextInput
                    style={{ width: width*0.73, elevation: 10, shadowColor: '#707070', backgroundColor: 'white', borderRadius: 10, marginTop: height*0.033, paddingLeft: width*0.038 }}
                    placeholder='Your Message'
                    multiline={true}
                    numberOfLines={10}
                    textAlignVertical={'top'}
                />
                <Buttons title={'Send'} width={width*0.73} margintop={height*0.055} />

            </View>

        </View>
    )
}

export default Contact