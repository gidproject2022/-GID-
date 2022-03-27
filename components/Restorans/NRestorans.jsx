import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Restorans from "./Restorans"
import TourBase from "../Object/TourBase"

const Stack = createNativeStackNavigator()

const NRestorans = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Рестораны2"
        component={Restorans}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Object"
        component={TourBase}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default NRestorans
