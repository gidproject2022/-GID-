import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Museums from "./Museums"
import TourBase from "../Object/TourBase"

const Stack = createNativeStackNavigator()

const NMuseums = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Музеи2"
        component={Museums}
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

export default NMuseums
