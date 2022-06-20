import { Text, Pressable } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Buttons = ({ title, press, width, margintop }) => {
  return (
    <Pressable
      onPress={press}
      style={{
        shadowColor: '#00BF77',
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 10,
        shadowOpacity: 0.3, elevation: 3
      }}>
      <LinearGradient
        colors={['#2ECBAA', '#387FDA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: 50,
          width: width,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: margintop,

        }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Buttons;
