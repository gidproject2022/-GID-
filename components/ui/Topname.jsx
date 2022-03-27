import { View, Text, Image } from 'react-native'
import React from 'react'

const Topname = () => {
  return (
    <View>
        <View style={{
            marginTop: 30,
            height: 36,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
        }} >
            <Image style={{
                height: 36,
                width: 36,
            }} source={require('../../assets/images/arrow-left.png')} />
            <Text style={{
                fontSize: 24,
                fontWeight: '600',
                fontFamily: 'Roboto-Bold',
                fontStyle: 'normal',
                lineHeight: 28.8,
                marginLeft: 12,
            }} >Избранное</Text>
        </View>
    </View>
  )
}

export default Topname