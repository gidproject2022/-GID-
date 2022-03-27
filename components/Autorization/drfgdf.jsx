import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TextBox from "../TextBox";
import Btn from "../Btn";
import firebase from "firebase/app";
import "firebase/auth";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function AutorizationScreen({ navigation }) {
  const [values, setValues] = useState({
    email: "",
    pwd: "",
  });

  function handleChange(text, eventName) {
    setValues((prev) => {
      return {
        ...prev,
        [eventName]: text,
      };
    });
  }

  function Autorization() {
    const { email, pwd } = values;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
        // ..
      });
  }

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>
        Вход в систему
      </Text>
      <TextBox
        placeholder="Электронная почта"
        onChangeText={(text) => handleChange(text, "email")}
      />
      <TextBox
        placeholder="Пароль"
        onChangeText={(text) => handleChange(text, "pwd")}
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "92%",
        }}
      >
        <Btn
          onClick={() => Autorization()}
          title="Войти"
          style={{ width: "48%", backgroundColor: "#344869" }}
        />
        <Btn
          onClick={() => navigation.navigate("Регистрация")}
          title="Регистрация"
          style={{ width: "48%", backgroundColor: "#344869" }}
        />
      </View>
    </View>
  );
}