import React from "react"
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import Filters from "../ui/Filters"
import Objects from "../ui/Objects"
import SearchBar from "../ui/SearchBar"

const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const Main = ({ navigation, props }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 60,
        width: WIDTH - 56,
        marginHorizontal: 28,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Настройки")
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
            }}
            source={require("../../assets/images/setting.png")}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: 18,
            lineHeight: 21.6,
          }}
        >
          Время отдыхать
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Профиль")
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
            }}
            source={require("../../assets/images/profile.png")}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: "Roboto-Bold",
          fontWeight: "600",
          fontStyle: "normal",
          fontSize: 24,
          lineHeight: 28.8,
          marginTop: 30,
        }}
      >
        Новости по турбазам
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          marginTop: 27,
          height: 311,
          width: WIDTH - 56,
        }}
      >
        <Image
          style={{
            height: 311,
            width: 225,
            marginRight: 25,
          }}
          source={require("../../assets/images/new.png")}
        />
        <Image
          style={{
            height: 311,
            width: 225,
            marginRight: 25,
          }}
          source={require("../../assets/images/new.png")}
        />
        <Image
          style={{
            height: 311,
            width: 225,
            marginRight: 25,
          }}
          source={require("../../assets/images/new.png")}
        />
      </ScrollView>
      <SearchBar />
      <Filters />
      <Objects type="Турбаза" />
    </ScrollView>
  )
}

export default Main
