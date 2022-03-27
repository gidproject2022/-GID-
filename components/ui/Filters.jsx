import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'

import ActiveF from './ActiveF'
import InActiveF from './InActiveF'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Filters = () => {
  return (
    <ScrollView horizontal={true}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{
        marginTop: 20,
        height: 40,
        width: (WIDTH - 56),
    }}>
      <ActiveF />
      <InActiveF />
      <InActiveF />
      <InActiveF />
      <InActiveF />
    </ScrollView>
  )
}

export default Filters