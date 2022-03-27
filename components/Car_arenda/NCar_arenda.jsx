import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Car_arenda from "./Car_arenda"
import TourBase from "../Object/TourBase"

const Stack = createNativeStackNavigator()

const NCar_arenda = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Аренда машины2"
        component={Car_arenda}
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

export default NCar_arenda
