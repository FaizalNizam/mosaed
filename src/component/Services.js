import { Pressable, ScrollView, View, Text } from 'react-native'
import React from 'react'
import ServicesSub from './ServicesSub'
import Buttons from './Button'

const Services = ({ navigation }) => {

  const color1 = ['#FA2E89', '#F93BC5']
  const color2 = ['#387FDA', '#2ECBAA']
  const color3 = ['#653DBC', '#B865D3']

  const handlePress = () => (
    navigation.navigate('ServiceList')
  )

  return (
    <ScrollView horizontal={true} >

      <ServicesSub color={color1} title={'Home Services'} para={'Lorem Ipsum is simply dummy text of the printing and typesetting industry'} >
        <Pressable style={{ alignItems: 'center', height: 100, marginTop: 50 }}>
          <Text style={{ color: '#C8C8E9', fontSize: 16 }}>Skip</Text>
        </Pressable>
      </ServicesSub>

      <ServicesSub color={color2} title={'Nursing'} para={'Lorem Ipsum is simply dummy text of the printing and typesetting industry'} >
        <Pressable style={{ alignItems: 'center', height: 100, marginTop: 50 }}>
          <Text style={{ color: '#C8C8E9', fontSize: 16 }}>Skip</Text>
        </Pressable>
      </ServicesSub>

      <ServicesSub color={color3} title={'Guests Serving'} para={'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}>
        <View style={{ alignItems: 'center', height: 100, marginTop: 50 }}>
          <Buttons title={'Start'} width={250} press={handlePress} />
        </View>
      </ServicesSub>

    </ScrollView>

  )
}

export default Services