import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import React from "react"

const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const TourBase = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View>
        <Image
          style={{
            height: WIDTH,
            width: WIDTH,
            borderRadius: 30,
          }}
          source={require("../../assets/images/tourbase.png")}
        />
      </View>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 28.8,
            marginLeft: 35,
          }}
        >
          Название объекта
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontSize: 18,
            fontWeight: "700",
            color: "#474747",
            marginLeft: 35,
            lineHeight: 21.6,
          }}
        >
          Место нахождения
        </Text>
        <View
          style={{
            marginLeft: 35,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontSize: 16,
              lineHeight: 19.2,
              fontWeight: "700",
            }}
          >
            Описание
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: 14,
              lineHeight: 16.8,
              fontStyle: "normal",
              color: "#999999",
            }}
          >
            Краткое описание этой турбазы, типо это очень круто, здесь всегда
            светит солнце ... <Text>Еще</Text>
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View
            style={{
              height: 60,
              width: 85,
              backgroundColor: "#EBEFEC",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#629570",
                fontFamily: "Roboto",
                fontSize: 16,
                lineHeight: 19.2,
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              15 км
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: "Roboto",
                fontWeight: "700",
                fontStyle: "normal",
                fontSize: 12,
                lineHeight: 14.4,
              }}
            >
              Дистанция
            </Text>
          </View>
          <View
            style={{
              height: 60,
              width: 85,
              backgroundColor: "#EBEFEC",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#629570",
                fontFamily: "Roboto",
                fontSize: 16,
                lineHeight: 19.2,
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              Зимний
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: "Roboto",
                fontWeight: "700",
                fontStyle: "normal",
                fontSize: 12,
                lineHeight: 14.4,
              }}
            >
              Сезон
            </Text>
          </View>
          <View
            style={{
              height: 60,
              width: 85,
              backgroundColor: "#EBEFEC",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#629570",
                fontFamily: "Roboto",
                fontSize: 16,
                lineHeight: 19.2,
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              5.0
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: "Roboto",
                fontWeight: "700",
                fontStyle: "normal",
                fontSize: 12,
                lineHeight: 14.4,
              }}
            >
              Рейтинг
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 23,
          paddingLeft: 35,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: 18,
            fontStyle: "normal",
            lineHeight: 21.6,
          }}
        >
          То что имеется
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 16.8,
            marginBottom: 20,
          }}
        >
          Душ
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 16.8,
            marginBottom: 18,
          }}
        >
          Туалет
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 16.8,
            marginBottom: 18,
          }}
        >
          Телевизор
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 16.8,
            marginBottom: 18,
          }}
        >
          Электричество
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 16.8,
            marginBottom: 18,
          }}
        >
          Кондиционер
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#689E7E",
          borderRadius: 15,
          height: 68,
          width: WIDTH - 70,
          marginLeft: 35,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Забронировать
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default TourBase
