import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { workers } from '../constants/workersData'
import back from '../assets/workers/back.png'
import bookmark from '../assets/workers/bookmark.png'
import { height, width } from '../constants/Dimension'

const Workers = ({ navigation }) => {

    console.log('height', height * 0.204)
    console.log('width', width * 0.123)

    const handlePress = () => (
        navigation.navigate('Profile')
    )

    const handleBack = () => (
        navigation.goBack()
    )

    const handleSaved = () => (
        navigation.navigate('Saved')
    )

    const render = ({ item }) => (
        <Pressable
            style={{ width: width * 0.834, height: height * 0.103, elevation: 5, shadowColor: '#707070', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: height * 0.0165, borderRadius: 10, shadowRadius: 10 }}
            onPress={handlePress}
        >
            <Image style={{ marginLeft: width * 0.037 }} source={item.logo} />
            <View style={{ marginLeft: width * 0.049 }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ color: 'black', fontSize: 10 }}>{item.company}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ marginTop: 2 }} source={item.profLogo} />
                    <Text style={{ color: 'black', marginLeft: width * 0.025, fontSize: 12 }}>{item.profession}</Text>
                </View>
            </View>
            <View style={{ marginLeft: width * 0.123 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{item.rent}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>QAR</Text>
            </View>
        </Pressable>
    )

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LinearGradient
                colors={['#387FDA', '#2ECBAA']}
                style={{ height: height * 0.204 }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={handleBack}>
                        <Image source={back} style={{ marginTop: height * 0.033, marginLeft: width * 0.025 }} />
                    </Pressable>
                    <Text style={{ fontSize: 22, color: 'white', marginTop: height * 0.028 }}>Workers</Text>
                    <Pressable onPress={handleSaved}>
                        <Image source={bookmark} style={{ marginTop: height * 0.033, marginRight: width * 0.025 }} />
                    </Pressable>
                </View>

                <Text style={{ fontSize: 16, color: 'white', marginTop: height * 0.022, alignSelf: 'center' }}>Lexiang Company</Text>

            </LinearGradient>

            <FlatList
                data={workers}
                renderItem={render}
                keyExtractor={item => item.id}
                style={{ marginTop: height * 0.022, alignSelf: 'center' }}
            />
        </View>
    )
}

export default Workers