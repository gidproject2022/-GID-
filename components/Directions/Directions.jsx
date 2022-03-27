import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Topdirection from '../ui/Topdirection'
import Directions_can from '../ui/Directions_can'
import ForYou from '../ui/ForYou'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Directions = ({navigation}) => {
  return (
    <View style={{
      marginTop: 0,
      paddingHorizontal: WIDTH/20,
      backgroundColor: 'white',
      height: '100%',
  }}>
      <Topdirection />
      <Directions_can />
      <ForYou />
    </View>
  )
}

export default Directions