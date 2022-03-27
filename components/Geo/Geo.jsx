import { View, Text } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const Geo = () => {
  return (
    <WebView style={{height: '100%', width: '100%', marginTop: 30}} source={{uri:"https://www.google.com/maps/place/%D0%9D%D0%B0%D0%BC%D1%81%D0%BA%D0%B8%D0%B9+%D1%83.,+%D0%A0%D0%B5%D1%81%D0%BF.+%D0%A1%D0%B0%D1%85%D0%B0+(%D0%AF%D0%BA%D1%83%D1%82%D0%B8%D1%8F)/@62.9420451,127.9744042,8z/data=!3m1!4b1!4m5!3m4!1s0x5bf43ad6a1a356bf:0xf7529c0120448985!8m2!3d62.9106298!4d129.043032?hl=ru"}} />
  )
}

export default Geo