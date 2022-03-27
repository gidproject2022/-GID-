import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native"
import React, { useContext } from "react"
import { NavigationContext } from "@react-navigation/native"

const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const Base = (props) => {
  const navigation = useContext(NavigationContext)
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Object")
      }}
    >
      <View
        style={{
          height: 110,
          width: WIDTH - 56,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 15,
        }}
      >
        <Image
          source={require("../../assets/images/base.png")}
          style={{
            height: 85,
            width: 85,
            borderRadius: 13,
            marginLeft: 12,
          }}
        />
        <View
          style={{
            height: 85,
            width: WIDTH - 56 - 85 - 12 - 12,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text>{props.name}</Text>
            <Text>Оценка</Text>
          </View>
          <Image
            source={require("../../assets/images/like.png")}
            style={{
              height: 16.03,
              width: 19,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Base
