import React from "react"
import { View, Text, Image } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Screens
import Navigation4 from "../Navigation/Navigation4"
import NFavorites from "../components/Favorites/NFavorites"
import Geo from "../components/Geo/Geo"
import Directions from "./Navigation2"

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Главная"
      screenOptions={({ route }) => ({
        headerStyle: { height: 0 },
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, border: "none", backgroundColor: "white" },
        tabBarIcon: ({ focused }) => {
          let img = "../assets/images/menu/directions.png"

          if (route.name === "Главная") {
            img = focused
              ? require("../assets/images/menu/main-active.png")
              : require("../assets/images/menu/main.png")
          } else if (route.name === "Избранные") {
            img = focused
              ? require("../assets/images/menu/favorites-active.png")
              : require("../assets/images/menu/favorites.png")
          } else if (route.name === "Направления") {
            img = focused
              ? require("../assets/images/menu/directions-active.png")
              : require("../assets/images/menu/directions.png")
          } else if (route.name === "Маршрут") {
            img = focused
              ? require("../assets/images/menu/geo-active.png")
              : require("../assets/images/menu/geo.png")
          }

          return <Image source={img} style={{ height: 25, width: 25 }} />
        },
      })}
    >
      <Tab.Screen name="Главная" component={Navigation4} />
      <Tab.Screen name="Избранные" component={NFavorites} />
      <Tab.Screen name="Направления" component={Directions} />
      <Tab.Screen name="Маршрут" component={Geo} />
    </Tab.Navigator>
  )
}

export default Navigation
