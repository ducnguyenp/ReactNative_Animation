import { CardStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, View, useColorScheme } from 'react-native'
import Home from './screens/Home'
import { createDrawerNavigator } from '@react-navigation/drawer'

const DrawerAnimation = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? 'white' : 'black',
  }

  return (
    <View />
  )
}

const options = {
  gestureEnabled: true,
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const Stack = createDrawerNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ ...options }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'React-Native Ui', headerShown: true }}
      />
      {/* <Stack.Screen name="Tab1" component={AnimTab1} />
      <Stack.Screen name="Tab2" component={AnimTab2} />
      <Stack.Screen name="Tab3" component={AnimTab3} />
      <Stack.Screen name="Tab4" component={Tab4} />
      <Stack.Screen name="Tab5" component={Tab5} />
      <Stack.Screen name="Contacts" component={ContactList} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Screen" component={Screen} />
      <Stack.Screen name="Products" component={ProductsList} />
      <Stack.Screen name="Details" component={DetailsScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen name="Fab" component={Fab} />
      <Stack.Screen name="Drawer1" component={DrawerNav1} /> */}
    </Stack.Navigator>
  )
}

export default DrawerAnimation
