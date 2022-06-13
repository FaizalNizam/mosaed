import { View, Text } from 'react-native'
import React from 'react'
import Homescreen from './src/component/Homescreen'
import Welcomescreen from './src/component/Welcomescreen'
import Terms from './src/component/Terms'

const App = () => {
  return (
    <View>
      {/* <Homescreen/> */}
      <Welcomescreen title={'Welcome'} sub={'Welcome, please enter your phone number to enter'} placeholder={'phone number'}/>
      {/* <Welcomescreen title={'Great,'} sub={'Welcome to the "Mosaed" Please enter your full name'} placeholder={'Full name'}/> */}
      {/* <Terms/> */}
    </View>
  )
}

export default App