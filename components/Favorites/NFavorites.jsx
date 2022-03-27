import { View, Text } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Favorites from "./Favorites"
import TourBase from "../Object/TourBase"

const Stack = createNativeStackNavigator()

const NFavorites = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Избранные2"
        component={Favorites}
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

export default NFavorites
