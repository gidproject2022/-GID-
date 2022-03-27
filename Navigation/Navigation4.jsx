import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

import NMain from "../components/Main/NMain"
import Profile from "../components/Profile/Profile"
import Setting from "../components/Settings/Setting"

const Navigation4 = () => {
  return (
    <Stack.Navigator initialRouteName={NMain}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Главный экран"
        component={NMain}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Профиль"
        component={Profile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Настройки"
        component={Setting}
      />
    </Stack.Navigator>
  )
}

export default Navigation4
