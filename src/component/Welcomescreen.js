import { View, Text, Image, TextInput, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { height, width } from '../constants/Dimension';
import logo from '../assets/welcomescreen/logo.png'
import bottomright from '../assets/welcomescreen/bottomright.png'
import otplogo from '../assets/welcomescreen/otplogo.png'
import Button from './Button';

const Welcomescreen = ({title,sub,placeholder}) => {
  console.log('height', height * 0.545);

  const [visible, setVisible] = useState(false)

  const onPress = () => {
    setVisible(!visible)
  }

  return (
    <View style={{ height: height * 0.9999 }}>

      <LinearGradient colors={['#387FDA', '#2ECBAA']} style={{ height: height * 0.341, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={logo} />
      </LinearGradient>

      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: '500', marginTop: height * 0.035 }}>{title}</Text>
        <Text style={{ fontSize: 14, color: '#363636', marginTop: height * 0.024 }}>{sub}</Text>
        <TextInput
          style={{ height: height * 0.067, width: 320, borderWidth: 1, borderColor: '#3D989F', borderRadius: 5, opacity: 0.5, marginTop: height * 0.036, paddingLeft: 10 }}
          placeholder={placeholder}
          placeholderTextColor={'#3D989F'}
        />
        <Button title={'send code'} press={onPress} margintop={height * 0.048} width={width * 0.77} />
      </View>

      <Image
        style={{ position: 'absolute', right: 0, bottom: 0 }}
        source={bottomright} />


      <Modal
        visible={visible}
        animationType='fade'
        transparent={true}
      >

        <View style={{ width: width * 0.856, height: height * 0.545, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, backgroundColor: '#ffffff', marginTop: 125, borderRadius: 10, marginLeft: 30 }}>
          <Image source={otplogo} style={{ marginTop: 10 }} />
          <Text style={{ fontSize: 18, marginTop: 20 }}>OTP Verification</Text>
          <Text style={{ fontSize: 14, color: '#AFABC4', marginTop: 20 }}>Please enter the OTP to 77302067
            to confirm your mobile number. </Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TextInput style={{ width: 40, height: 37, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
            <TextInput style={{ width: 40, height: 37, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
            <TextInput style={{ width: 40, height: 37, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
            <TextInput style={{ width: 40, height: 37, borderWidth: 1, borderColor: '#3D989F', margin: 10, opacity: 0.5 }} />
          </View>
          <Pressable style={{ marginTop: 30 }}>
            <Text>Resend?</Text>
          </Pressable>
          <Button title={'submit'} width={250} press={onPress} margintop={10} />
        </View>

      </Modal>

    </View>
  )
}

export default Welcomescreen