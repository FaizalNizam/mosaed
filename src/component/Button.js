import { Text, Pressable } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Buttons = ({ title, press, width, margintop }) => {
  return (
    <Pressable onPress={press}>
      <LinearGradient
        colors={['#2ECBAA', '#387FDA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: 50,
          width: width,
          borderRadius: 30,
          justifyContent: 'center',
          shadowColor: '#00BF77',
          shadowOffset: { width: 1, height: 10 },
          shadowOpacity: 1.5,
          alignItems: 'center',
          marginTop: margintop,
          elevation:10
        }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Buttons;
