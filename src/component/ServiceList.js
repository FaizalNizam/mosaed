import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import logo from '../assets/servicelist/logo.png'
import house from '../assets/servicelist/house.png'
import threedot from '../assets/servicelist/threedot.png'
import bookmark from '../assets/servicelist/bookmark.png'
import { height, width } from '../constants/Dimension'

const ServiceList = ({ navigation }) => {

  console.log('height', height * 0.044)
  console.log('width', width * 0.098)

  const handlePress = () => (
    navigation.navigate('Companies')
  )
  const handleSaved = () => (
    navigation.navigate('Saved')
  )

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LinearGradient
        colors={['#2ECBAA', '#387FDA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: height * 0.411 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={threedot} style={{ marginTop: height * 0.033, marginLeft: width * 0.025 }} />
          <Text style={{ fontSize: 22, marginTop:  height * 0.028, fontWeight: '500', color: 'white' }}>Services</Text>
          <Pressable onPress={handleSaved}>
            <Image source={bookmark} style={{ marginTop: height * 0.033, marginRight: width * 0.025 }} />
          </Pressable>
        </View>
        <Image style={{ marginTop:  height * 0.066, alignSelf: 'center' }} source={logo} />
        <Text style={{ fontSize: 18, marginTop: height * 0.044, textAlign: 'center', color: 'white' }}>
          What service you are {'\n'} looking for ?
        </Text>
      </LinearGradient>

      <View style={{ flex: 1, alignItems: 'center',marginTop:height * 0.055}}>

        <Pressable
          style={{ width: width * 0.87, height: height * 0.098, borderRadius: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', elevation: 20, shadowColor: '#707070'}}
          onPress={handlePress}
        >
          <LinearGradient
            colors={['#FA2E89', '#F93BC5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: height * 0.098, width: width * 0.202, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
            <Image source={house} />
          </LinearGradient>
          <Text style={{ color: 'black', marginLeft: width * 0.098, fontSize: 20 }}>
            Home Services
          </Text>
        </Pressable>

        <Pressable
          style={{ width: width * 0.87, height: height * 0.098, borderRadius: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', elevation: 20, shadowColor: '#707070',marginTop:height * 0.033 }}
          onPress={handlePress}
        >
          <LinearGradient
            colors={['#387FDA', '#2ECBAA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: height * 0.098, width: width * 0.202, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
            <Image source={house} />
          </LinearGradient>
          <Text style={{ color: 'black', marginLeft: width * 0.098, fontSize: 20 }}>
            Nursing
          </Text>
        </Pressable>

        <Pressable
          style={{ width: width * 0.87, height: height * 0.098, borderRadius: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', elevation: 20, shadowColor: '#707070',marginTop:height * 0.033 }}
          onPress={handlePress}
        >
          <LinearGradient
            colors={['#653DBC', '#B865D3']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: height * 0.098, width: width * 0.202, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
            <Image source={house} />
          </LinearGradient>
          <Text style={{ color: 'black', marginLeft: width * 0.098, fontSize: 20 }}>
            Guests Serving
          </Text>
        </Pressable>

      </View>
    </View>
  )
}

export default ServiceList
