import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Otels from "./Otels"
import TourBase from "../Object/TourBase"

const Stack = createNativeStackNavigator()

const NOtels = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Отели2"
        component={Otels}
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

export default NOtels
