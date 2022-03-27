import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Topdirection = () => {
  return (
    <View style={{
        marginTop: 60,
        height: 30,
        width: (WIDTH - 56),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }}>
        <Text style={{
            fontWeight: '500',
            fontFamily: 'Roboto-Medium',
            fontStyle: 'normal',
            fontSize: 24,
            lineHeight: 28.8,
        }}>Направления</Text>
        <Text style={{
            fontWeight: '400',
            fontFamily: 'Roboto',
            fontSize: 24,
            fontStyle: 'normal',
            lineHeight: 28.8,
        }}>Намский улус</Text>
    </View>
  )
}

export default Topdirection