import { View, Text } from "react-native"
import React from "react"

import { auth } from "../../firebase/firebase"
import { signOut } from "firebase/auth"

const Profile = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          marginTop: 100,
        }}
        onPress={() => {
          signOut(auth)
            .then(() => {})
            .catch((error) => {
              alert(error)
            })
        }}
      >
        Выход
      </Text>
    </View>
  )
}

export default Profile
