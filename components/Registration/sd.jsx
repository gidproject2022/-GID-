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

export default function RegistrationScreen({ navigation }) {
  const [values, setValues] = useState({
    email: "",
    pwd: "",
    pwd2: "",
  });

  function handleChange(text, eventName) {
    setValues((prev) => {
      return {
        ...prev,
        [eventName]: text,
      };
    });
  }

  function Registration() {
    const { email, pwd, pwd2 } = values;

    if (pwd == pwd2) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pwd)
        .then(() => {})
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Пароли не совпадают!");
    }
  }

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>
        Регистрация
      </Text>
      <TextBox
        placeholder="Электронная почта"
        onChangeText={(text) => handleChange(text, "email")}
      />
      <TextBox
        placeholder="Пароль"
        secureTextEntry={true}
        onChangeText={(text) => handleChange(text, "pwd")}
      />
      <TextBox
        placeholder="Повторно введите пароль"
        secureTextEntry={true}
        onChangeText={(text) => handleChange(text, "pwd2")}
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
          onClick={() => Registration()}
          title="Регистрация"
          style={{ width: "48%", backgroundColor: "#344869" }}
        />
        <Btn
          onClick={() => navigation.replace("Войти")}
          title="Войти"
          style={{ width: "48%", backgroundColor: "#344869" }}
        />
      </View>
    </View>
  );
}