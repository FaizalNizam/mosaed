import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import back from '../assets/profile/back.png'
import bookmark from '../assets/profile/bookmark.png'
import dp from '../assets/profile/dp.png'
import badge from '../assets/profile/badge.png'
import message from '../assets/profile/message.png'
import watsapp from '../assets/profile/watsapp.png'
import call from '../assets/profile/call.png'
import bookmarklight from '../assets/profile/bookmarklight.png'
import { height, width } from '../constants/Dimension'

const Profile = ({ navigation }) => {
    console.log('height', height * 0.011)
    console.log('width', width * 0.049)

    const handleBack = () => (
        navigation.goBack()
    )
    const handleSaved = () => (
        navigation.navigate('Saved')
    )

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LinearGradient
                colors={['#387FDA', '#2ECBAA']}
                style={{ height: height * 0.274, justifyContent: 'space-between', flexDirection: 'row' }}
            >
                <Pressable onPress={handleBack}>
                    <Image source={back} style={{ marginTop: height * 0.033, marginLeft: width * 0.025 }} />
                </Pressable>
                <Text style={{ fontSize: 22, color: 'white', marginTop: height * 0.033 }}>Profile</Text>
                <Pressable onPress={handleSaved}>
                    <Image source={bookmark} style={{ marginTop: height * 0.033, marginRight: width * 0.025 }} />
                </Pressable>
            </LinearGradient>

            <Image source={dp} style={{ position: 'absolute', alignSelf: 'center', marginTop: height * 0.154, zIndex: 1 }} />

            <View
                style={{ width:  width * 0.81, height:  height * 0.349, backgroundColor: 'white', elevation: 10, shadowColor: '#707070', position: 'absolute', marginTop: height * 0.22, alignSelf: 'center', alignItems: 'center', borderRadius: 10 }}
            >
                <Image source={bookmarklight} style={{ alignSelf: 'flex-end', marginRight: 5, marginTop: 5 }} />
                <View
                    style={{ alignItems: 'center', marginTop: height * 0.055, width: width * 0.696, borderBottomWidth: 2, borderBottomColor: '#F1F4FB' }}
                >
                    <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black' }}>Salma Saeed </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={badge} />
                        <Text style={{ marginLeft: width * 0.025 }}>Nursing </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop:  height * 0.011 }}>
                        <Image source={call} />
                        <Image source={message} style={{ marginLeft:  width * 0.049, marginRight:  width * 0.049 }} />
                        <Image source={watsapp} />
                    </View>
                </View>

                <View style={{ width:  width * 0.696, marginTop: height * 0.011 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 12, color: '#AFABC4' }}>Hourly rate</Text>
                            <Text style={{ fontSize: 18, fontWeight: '400', color: '#000000' }}>150 QAR</Text>
                        </View>
                        <View style={{ marginLeft: width * 0.244 }}>
                            <Text style={{ fontSize: 12, color: '#AFABC4' }}>Nationality</Text>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: '#000000' }}>Philippine</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 12, color: '#AFABC4', marginTop: height * 0.011 }}>Company Name</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#000000', marginTop: 5 }}>Nursco Nursing Company</Text>

                </View>
            </View >

            <View
                style={{ width:  width * 0.81, height: height * 0.285, backgroundColor: 'white', elevation: 10, shadowColor: '#707070', position: 'absolute', marginTop: height * 0.58, alignSelf: 'center', padding: 20, borderRadius: 10 }}
            >
                <Text style={{ color: '#AFABC4', fontSize: 10 }}>About me</Text>
                <Text
                    style={{ marginTop: height * 0.011 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </Text>
            </View>

        </View>
    )
}

export default Profile