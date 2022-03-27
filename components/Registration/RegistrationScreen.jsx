import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase"

const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const RegistrationScreen = ({ navigation }) => {
  const [values, setValues] = useState({
    email: "",
    pwd: "",
    pwd2: "",
  })

  function handleChange(text, eventName) {
    setValues((prev) => {
      return {
        ...prev,
        [eventName]: text,
      }
    })
  }

  function Registration() {
    const { email, pwd, pwd2 } = values

    if (pwd === pwd2) {
      createUserWithEmailAndPassword(auth, email, pwd)
        .then(() => {})
        .catch((error) => {
          alert(error.message)
        })
    } else {
      alert("Пароли не совпадают!")
    }
  }
  return (
    <View
      style={{
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Image
        style={{
          height: 100,
          width: 100,
        }}
        source={require("../../assets/images/logo.png")}
      />
      <Text
        style={{
          fontFamily: "Roboto",
          fontWeight: "500",
          fontStyle: "normal",
          fontSize: 18,
          lineHeight: 25.2,
          marginBottom: 45,
        }}
      >
        Регистрация в GID
      </Text>
      <TextInput
        onChangeText={(text) => handleChange(text, "email")}
        style={{
          height: 48,
          width: WIDTH - 94,
          borderColor: "#CFCFD0",
          borderWidth: 3,
          borderRadius: 4,
          textAlign: "center",
          marginTop: 16,
        }}
        placeholder="E-Mail"
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => handleChange(text, "pwd")}
        style={{
          height: 48,
          width: WIDTH - 94,
          borderColor: "#CFCFD0",
          borderWidth: 3,
          borderRadius: 4,
          textAlign: "center",
          marginTop: 16,
        }}
        placeholder="Пароль"
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => handleChange(text, "pwd2")}
        style={{
          height: 48,
          width: WIDTH - 94,
          borderColor: "#CFCFD0",
          borderWidth: 3,
          borderRadius: 4,
          textAlign: "center",
          marginTop: 16,
        }}
        placeholder="Повторите пароль"
      />
      <TouchableOpacity onPress={() => Registration()}>
        <LinearGradient
          style={{
            height: 48,
            width: WIDTH - 94,
            display: "flex",
            marginTop: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          colors={["#3B46A7", "#7E89F0"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Зарегистрироваться ->
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text
        onPress={() => {
          navigation.navigate("Авторизация")
        }}
        style={{
          color: "gray",
          marginTop: 30,
        }}
      >
        Есть аккаунт?{" "}
        <Text
          style={{
            color: "black",
          }}
        >
          Войти
        </Text>
      </Text>
    </View>
  )
}

export default RegistrationScreen
