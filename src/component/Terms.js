import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Button from './Button'
import { height, width } from '../constants/Dimension'

const Terms = ({ navigation }) => {

    console.log('height', height * 0.066)
    console.log('width', width * 0.68)

    const handlePress = () => (
        navigation.navigate('Services')
    )

    return (
        <View style={{ backgroundColor: '#FAFBFD' }}>
            <LinearGradient colors={['#2ECBAA', '#387FDA']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ height: height * .143 }}>
                <Text style={{ alignSelf: 'center', marginTop: height * .06, fontSize: 22, color: 'white' }}>
                    Terms And Conditions
                </Text>
            </LinearGradient>

            <ScrollView style={{ marginHorizontal: width * .0513, height: height * .83 }}>
                <Text style={{ fontSize: 16, color: '#363636', marginTop: height * .0211 }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero justo du
                    dolores et ea rebum. Stet clita
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero justo du
                    dolores et ea rebum. Stet clita
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </Text>
            </ScrollView>

            <View
                style={{ height: height * .133, width: width * .99991, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0,marginBottom: height * 0.066 }}
            >
                <Button title={'I agree'} press={handlePress} width={width * .642} />
            </View>

        </View>
    )
}

export default Terms