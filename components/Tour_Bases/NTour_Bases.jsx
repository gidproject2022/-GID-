import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Tour_Bases from "./Tour_Bases"
import TourBase from "../Object/TourBase"

const Stack = createNativeStackNavigator()

const NTour_Bases = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Турбазы2"
        component={Tour_Bases}
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

export default NTour_Bases
