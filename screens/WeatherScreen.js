import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
import React from 'react'
import Back_Icon from "../assets/SVG/Back_Icon.svg";
import { useFonts } from "expo-font";
import Weather_ThunderStorm from "../assets/SVG/Weather_ThunderStorm.svg";
import Small_Weather_Thunderstorm from "../assets/SVG/Small_Weather_Thunderstorm.svg";
import Wind_icon from "../assets/SVG/Wind_icon.svg";
import Menu from "../components/Menu";
import { useNavigation } from '@react-navigation/native';

StatusBar.setBackgroundColor("#0e1219", true);

const WeatherScreen = () => {

    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        Barlow_regular: require("../assets/Fonts/Barlow-Regular.ttf"),
        Barlow_medium: require("../assets/Fonts/Barlow-Medium.ttf"),
        Barlow_bold: require("../assets/Fonts/Barlow-Bold.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }
      const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={[styles.container, { height: screenHeight }]} >
    <View className="h-full mx-4">
      <View className="">
        <View className="flex-row items-center mt-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Back_Icon />
                </TouchableOpacity>
            <Text className="text-white text-3xl pl-2" style={{fontFamily:"Barlow_medium"}}>Weather</Text>
        </View>
        <View className="justify-center items-center mt-8">
            <View><Text className="text-white text-5xl" style={{fontFamily:"Barlow_medium"}}>New Delhi</Text></View>
            <View><Text className="text-white text-2xl" style={{fontFamily:"Barlow_regular"}}>India</Text></View>
            <View className="flex-row justify-center items-center gap-2">
                <View>
                    <Weather_ThunderStorm />
                </View>
                <View><Text className="text-white text-6xl p-6" style={{fontFamily:"Barlow_medium"}}>16&#176;</Text></View>
            </View>
            <View><Text className="text-white text-3xl pb-6" style={{fontFamily:"Barlow_medium"}}>ThunderStorms</Text></View>
        </View>
      </View>
      <View className="flex-1">
        <View className="w-full rounded-xl p-3 justify-center items-center" style={{backgroundColor:"#545454"}}>
            <View className="w-full mb-4"><Text className="text-white text-2xl" style={{fontFamily:"Barlow_regular"}}>Forecast</Text></View>
            <ScrollView horizontal={true} className="mb-2">
                <View className=" px-3">
                    <View className="justify-center items-center"><Small_Weather_Thunderstorm /></View>
                    <View className="justify-center items-center"><Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>10:10</Text></View>
                </View>
                <View className=" px-3">
                    <View className="justify-center items-center"><Small_Weather_Thunderstorm /></View>
                    <View className="justify-center items-center"><Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>10:10</Text></View>
                </View>
                <View className=" px-3">
                    <View className="justify-center items-center"><Small_Weather_Thunderstorm /></View>
                    <View className="justify-center items-center"><Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>10:10</Text></View>
                </View>
                <View className=" px-3">
                    <View className="justify-center items-center"><Small_Weather_Thunderstorm /></View>
                    <View className="justify-center items-center"><Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>10:10</Text></View>
                </View>
                <View className=" px-3">
                    <View className="justify-center items-center"><Small_Weather_Thunderstorm /></View>
                    <View className="justify-center items-center"><Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>10:10</Text></View>
                </View>
            </ScrollView>
            <View className="w-full mb-3"><Text className="text-white text-2xl" style={{fontFamily:"Barlow_regular"}}>Wind</Text></View>
            <ScrollView horizontal={true} className="mb-3">
                <View className=" px-2">
                    <View className="justify-center items-center"><Wind_icon /></View>
                    <View className="justify-center items-center"><Text className="text-white text-md" style={{fontFamily:"Barlow_medium"}}>12 Km/h</Text></View>
                </View>
                <View className=" px-2">
                    <View className="justify-center items-center"><Wind_icon /></View>
                    <View className="justify-center items-center"><Text className="text-white text-md" style={{fontFamily:"Barlow_medium"}}>12 Km/h</Text></View>
                </View>
                <View className=" px-2">
                    <View className="justify-center items-center"><Wind_icon /></View>
                    <View className="justify-center items-center"><Text className="text-white text-md" style={{fontFamily:"Barlow_medium"}}>12 Km/h</Text></View>
                </View>
                <View className=" px-2">
                    <View className="justify-center items-center"><Wind_icon /></View>
                    <View className="justify-center items-center"><Text className="text-white text-md" style={{fontFamily:"Barlow_medium"}}>12 Km/h</Text></View>
                </View>
                <View className=" px-2">
                    <View className="justify-center items-center"><Wind_icon /></View>
                    <View className="justify-center items-center"><Text className="text-white text-md" style={{fontFamily:"Barlow_medium"}}>12 Km/h</Text></View>
                </View>
            </ScrollView>
        </View>
        <View className="w-full rounded-xl p-3 justify-center items-center mt-4" style={{backgroundColor:"#545454" , height:200}}>
            <View className="w-full mb-3">
                <Text className="text-white text-2xl" style={{fontFamily:"Barlow_regular"}}>7 Days Forecast</Text>
            </View>
            <ScrollView className="w-full">
                <View className="flex-row w-full items-center px-4 py-2 rounded-md mb-2" style={{justifyContent : "space-between" , backgroundColor : '#1058BC'}}>
                    <Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>Today</Text>
                    <Small_Weather_Thunderstorm />
                    <Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>20&#176;</Text>
                    <Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>17&#176;</Text>
                    <View className="flex-row">
                    <Wind_icon />
                    <Text className="text-white text-xl ml-2" style={{fontFamily:"Barlow_regular"}}>12 Km/h</Text>
                    </View>
                </View>
                <View className="flex-row w-full items-center px-4 py-2 rounded-md mb-2" style={{justifyContent : "space-between" , backgroundColor : '#1058BC'}}>
                    <Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>Today</Text>
                    <Small_Weather_Thunderstorm />
                    <Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>20&#176;</Text>
                    <Text className="text-white text-xl" style={{fontFamily:"Barlow_regular"}}>17&#176;</Text>
                    <View className="flex-row">
                    <Wind_icon />
                    <Text className="text-white text-xl ml-2" style={{fontFamily:"Barlow_regular"}}>12 Km/h</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
      </View>
    </View>
    <Menu />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0e1219",
      paddingTop: StatusBar.currentHeight,
    }
})

export default WeatherScreen