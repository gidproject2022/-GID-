import { View, Text, Image, ScrollView } from "react-native"
import React from "react"

import Topname from "../ui/Topname"
import SearchBar from "../ui/SearchBar"
import Filters from "../ui/Filters"
import Objects from "../ui/Objects"

const Favorites = ({ props }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 30,
        paddingHorizontal: 28,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Topname />
      <SearchBar />
      <Filters />
      <Objects type="Турбаза" />
    </ScrollView>
  )
}

export default Favorites
