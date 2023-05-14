import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from './RouteParams'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'

const Stack = createStackNavigator<RootStackParamList>()

const screenOptions = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }
  

const AppNavigation = () => {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='HomeStack'
          screenOptions={{
            ...screenOptions,
            headerShown: false,
            animationEnabled: false,
          }}
        >
          <Stack.Screen name='HomeStack' component={Home} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default AppNavigation
