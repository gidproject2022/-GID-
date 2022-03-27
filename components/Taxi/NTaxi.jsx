import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Taxi from "./Taxi"
import TourBase from "../Object/TourBase"

const Stack = createNativeStackNavigator()

const NTaxi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Такси2"
        component={Taxi}
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

export default NTaxi
