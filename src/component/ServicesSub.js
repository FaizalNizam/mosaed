/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import { View, Image, Text } from 'react-native'
import React from 'react'
import logo from '../assets/servicescreen/round.png'
import LinearGradient from 'react-native-linear-gradient';

const ServicesSub = (props) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>

      <View style={{ height: 510, width: 336, marginRight: 20, marginLeft: 20, alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginTop: 110, elevation: 10, shadowColor: '#707070' }} >
        <LinearGradient
          colors={props.color}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 270, width: 336, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
          <Image source={logo} />
        </LinearGradient>
        <Text style={{ color: 'black', marginTop: 40, fontSize: 28 }}>{props.title}</Text>
        <Text style={{ color: 'black', marginTop: 25, fontSize: 16, paddingLeft: 5, paddingRight: 5 }}>{props.para}
        </Text>
      </View>

      {
        props.children
      }

    </View>
  )
}

export default ServicesSub