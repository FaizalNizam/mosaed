import { View, Text, Image, TextInput, Pressable, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { height, width } from '../constants/Dimension';
import logo from '../assets/welcomescreen/logo.png'
import bottomright from '../assets/welcomescreen/bottomright.png'
import otplogo from '../assets/welcomescreen/otplogo.png'
import Buttons from './Button';

const Welcomescreen = (props) => {
  console.log('height', height * 0.022)
  console.log('width', width * 0.025)

  const [visible, setVisible] = useState(false)

  const handlePress = () => {
    console.log('name',props.name)
    props.navigation.navigate('Welcomescreen')
  }

  const handleNext=()=>(
    props.navigation.navigate('Terms')
  )

  return (
    <View style={{ height: height * 0.9999 }}>

      <LinearGradient colors={['#387FDA', '#2ECBAA']} style={{ height: height * 0.341, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={logo} />
      </LinearGradient>

      <View style={{ marginHorizontal: width * 0.074 }}>
        <Text style={{ fontSize: 24, fontWeight: '500', marginTop: height * 0.035, color: 'black' }}>{props.title}</Text>
        <Text style={{ fontSize: 14, color: '#363636', marginTop: height * 0.024 }}>{props.sub}</Text>
        <TextInput
          style={{ height: height * 0.067, width: width * 0.78, borderWidth: 1, borderColor: '#3D989F', borderRadius: 5, opacity: 0.5, marginTop: height * 0.036, paddingLeft: width * 0.025 }}
          placeholder={props.placeholder}
          placeholderTextColor={'#3D989F'}
        />
        <Buttons title={'send code'} press={props.name==='homescreen'?()=>setVisible(!visible):handleNext} margintop={height * 0.048} width={width * 0.77} />
      </View>

      <Image
        style={{ position: 'absolute', right: 0, bottom: 0 }}
        source={bottomright} />


      <Modal
        visible={visible}
        animationType='fade'
        transparent={true}
      >

        <View style={{ width: width * 0.856, height: height * 0.545, alignItems: 'center', justifyContent: 'center', marginHorizontal: width * 0.05, backgroundColor: '#ffffff', marginTop: height * 0.137, borderRadius: 10, marginLeft: width * 0.073 }}>
          <Image source={otplogo} style={{ marginTop:  height * 0.012 }} />
          <Text style={{ fontSize: 18, marginTop:  height * 0.022 }}>OTP Verification</Text>
          <Text style={{ fontSize: 14, color: '#AFABC4', marginTop: height * 0.022 }}>Please enter the OTP to 77302067
            to confirm your mobile number. </Text>
          <View style={{ flexDirection: 'row', marginTop: height * 0.022 }}>
            <TextInput style={{ width: width * 0.098, height: height * 0.041, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
            <TextInput style={{ width: width * 0.098, height: height * 0.041, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
            <TextInput style={{ width: width * 0.098, height: height * 0.041, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
            <TextInput style={{ width: width * 0.098, height: height * 0.041, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
          </View>
          <Pressable style={{ marginTop: height * 0.033 }}>
            <Text>Resend?</Text>
          </Pressable>
          <Buttons title={'submit'} press={handlePress} width={width * 0.61} margintop={height * 0.011} />
        </View>

      </Modal>

    </View>
  )
}

export default Welcomescreen