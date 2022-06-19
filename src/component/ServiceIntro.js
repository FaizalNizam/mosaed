import { View, Text, Image, Animated } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { serviceData } from '../constants/servicesData'
import LinearGradient from 'react-native-linear-gradient'

const ServiceIntro = () => {

    const render = ({ item }) => (
        <>
            <View
                style={{ height: 510, width: 336, marginRight: 20, marginLeft: 20, alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginTop: 110, elevation: 10, shadowColor: '#707070' }}>
                <LinearGradient
                    colors={item.color}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ height: 270, width: 336, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <Image source={item.logo} />
                </LinearGradient>
                <Text style={{ color: 'black', marginTop: 40, fontSize: 28 }}>{item.title}</Text>
                <Text style={{ color: 'black', marginTop: 25, fontSize: 16, paddingLeft: 5, paddingRight: 5 }}>{item.para}
                </Text>

                <LinearGradient
                    style={{ height: 5, width: 36,marginTop:180 }}
                    colors={['#387FDA', '#2ECBAA']} />
            </View>



        </>
    )


    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>

            <Animated.FlatList
                data={serviceData}
                renderItem={render}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            />

        </View>
    )
}

export default ServiceIntro