import { StyleSheet, Text, View } from "react-native"
import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Directions from "../components/Directions/Directions"
import NTaxi from "../components/Taxi/NTaxi"
import NCar_arenda from "../components/Car_arenda/NCar_arenda"
import NOtels from "../components/Otels/NOtels"
import NTour_Bases from "../components/Tour_Bases/NTour_Bases"
import NPlaces from "../components/Places/NPlaces"
import NMuseums from "../components/Museums/NMuseums"
import NRestorans from "../components/Restorans/NRestorans"

const Stack = createNativeStackNavigator()

const Navigation2 = () => {
  return (
    <Stack.Navigator initialRouteName="Начало">
      <Stack.Screen
        name="Начало"
        component={Directions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Такси"
        component={NTaxi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Аренда машины"
        component={NCar_arenda}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Отели"
        component={NOtels}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Турбазы"
        component={NTour_Bases}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Рестораны"
        component={NRestorans}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Места"
        component={NPlaces}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Музеи"
        component={NMuseums}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Navigation2
