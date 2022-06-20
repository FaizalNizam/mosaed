import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//components
import SplashScreen from './src/component/SplashScreen'
import Welcomescreen from './src/component/Welcomescreen'
import Terms from './src/component/Terms'
import Services from './src/component/Services'
import ServiceList from './src/component/ServiceList'
import Companies from './src/component/Companies'
import Workers from './src/component/Workers'
import Profile from './src/component/Profile'
import Contact from './src/component/Contact'
import Saved from './src/component/Saved'
import ServiceIntro from './src/component/ServiceIntro'
import Round from './src/component/Round'


const App = () => {

  const stack = createStackNavigator()

  return (
    <NavigationContainer style={{ flex: 1 }}>

      <stack.Navigator screenOptions={{ headerShown: false }}>

        {/* <stack.Screen name='splashscreen' component={SplashScreen} /> */}

        {/* <stack.Screen name='HomeScreen'>
          {(props) => <Welcomescreen
            title={'Welcome'}
            sub={'Welcome, please enter your phone number to enter'}
            placeholder={'phone number'}
            name={'homescreen'}
            {...props}
          />}
        </stack.Screen> */}

        {/* <stack.Screen name='Welcomescreen'>
          {(props) => <Welcomescreen
            title={'Great,'}
            sub={'Welcome to the "Mosaed" Please enter your full name'}
            placeholder={'Full name'}

            {...props}
          />}
        </stack.Screen> */}

        {/* <stack.Screen name='Terms' component={Terms} /> */}

        {/* <stack.Screen name='Services' component={Services} /> */}

        {/* <stack.Screen name='ServiceList' component={ServiceList} /> */}

        {/* <stack.Screen name='Companies' component={Companies} /> */}

        {/* <stack.Screen name='Workers' component={Workers} /> */}

        {/* <stack.Screen name='Profile' component={Profile} /> */}

        {/* <stack.Screen name='Saved' component={Saved} /> */}

        {/* <stack.Screen name='contact' component={Contact} /> */}

        {/* <stack.Screen name='Services' component={ServiceIntro} /> */}

        <stack.Screen name='splashscreen' component={Round} />

      </stack.Navigator >

    </NavigationContainer>
  )
}

export default App
