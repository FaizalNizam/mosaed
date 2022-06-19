import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React from 'react'
import { companyData } from '../constants/companyData'
import LinearGradient from 'react-native-linear-gradient'
import back from '../assets/companies/back.png'
import bookmark from '../assets/companies/bookmark.png'
import { height, width } from '../constants/Dimension'

const Companies = ({ navigation }) => {

    console.log('height', height * 0.0165)
    console.log('width', width * 0.834)

    const handlePress = () => (
        navigation.navigate('Workers')
    )
    const handleBack = () => (
        navigation.goBack()
    )
    const handleSaved = () => (
        navigation.navigate('Saved')
    )


    const render = ({ item }) => (

        <Pressable
            style={{ width: width * 0.834, height:  height * 0.103, elevation: 5, shadowColor: '#707070', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: height * 0.0165, borderRadius: 10, shadowRadius: 10 }}
            onPress={handlePress}
        >
            <Image source={item.logo} />
            <View style={{ marginLeft: width * 0.0495 }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#EDAE20', marginTop: 2 }}>{item.star}</Text>
                    <Text style={{ color: 'black', marginLeft: width * 0.0245 }}>{item.rating}</Text>
                </View>
            </View>
        </Pressable>


    )

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <LinearGradient
                colors={['#387FDA', '#2ECBAA']}
                style={{ height: height * 0.274, justifyContent: 'space-between', flexDirection: 'row', position: 'absolute', top: 0, right: 0, left: 0 }}
            >
                <Pressable onPress={handleBack}>
                    <Image source={back} style={{ marginTop: height * 0.033, marginLeft: width * 0.0245 }} />
                </Pressable>
                <Text style={{ fontSize: 22, color: 'white', marginTop: height * 0.033 }}>Companies</Text>
                <Pressable onPress={handleSaved}>
                    <Image source={bookmark} style={{ marginTop: height * 0.033, marginRight: width * 0.0245 }} />
                </Pressable>
            </LinearGradient>

            <FlatList
                data={companyData}
                renderItem={render}
                keyExtractor={item => item.id}
                style={{ alignSelf: 'center', height: height * 0.766, marginTop: height * 0.199 }}
            />

        </View>
    )
}

export default Companies