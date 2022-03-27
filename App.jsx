import React, { useState } from "react"

import { LogBox } from "react-native"
LogBox.ignoreLogs(["Warning: ..."])
LogBox.ignoreLogs(["Remote debugger"])
LogBox.ignoreLogs(["AsyncStorage"])

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AppLoading from "expo-app-loading"
import * as Font from "expo-font"

import Navigation from "./Navigation/Navigaiton"
import RegistrationScreen from "./components/Registration/RegistrationScreen"
import AutorizationScreen from "./components/Autorization/AutorizationScreen"

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebase"

async function loadAppAplication() {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    Roboto: require("./assets/fonts/Roboto-MediumItalic.ttf"),
    Inspiration: require("./assets/fonts/Inspiration-Regular.ttf"),
  })
}

const Stack = createNativeStackNavigator()

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  })
  const [isReady, setIsReady] = useState(false)
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAppAplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Навигация"
            component={Navigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Авторизация"
            component={AutorizationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Регистрация"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default App
