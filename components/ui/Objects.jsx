import { View, Text, ScrollView, Dimensions } from "react-native"
import React from "react"
import Base from "./Base"

const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const Objects = (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Base name={props.type} />
      <Base name={props.type} />
      <Base name={props.type} />
      <Base name={props.type} />
      <Base name={props.type} />
      <Base name={props.type} />
      <Base name={props.type} />
      <Base name={props.type} />
    </ScrollView>
  )
}
export default Objects
