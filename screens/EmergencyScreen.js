import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Menu from "../components/Menu";
import Back_Icon from "../assets/SVG/Back_Icon.svg";
import BigEmergency_Icon from "../assets/SVG/BigEmergency_Icon.svg";
import SOS_Icon from "../assets/SVG/SOS_Icon.svg";
import Send_Icon from "../assets/SVG/Send_Icon.svg";
import React from 'react'
import { useFonts } from "expo-font";

const EmergencyScreen = () => {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Barlow_medium: require("../assets/Fonts/Barlow-Medium.ttf"),
    Barlow_bold: require("../assets/Fonts/Barlow-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

    const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={[styles.container, { height: screenHeight }]} >
        <View className="w-full h-full relative">
            {/* Container */}
            <View className="mx-4 pt-6"> 
              <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Back_Icon />
                </TouchableOpacity>
              </View>
              <View className="justify-center items-center">
                <BigEmergency_Icon />
              <TouchableOpacity>
                  <SOS_Icon />
                </TouchableOpacity>
                <View className="py-5">
                <Text className="text-white text-2xl font-bold"  style={{ fontFamily: "Barlow_bold" }}>Press <Text style={{color : "#FC5750"}}>SOS</Text> for help</Text>
                </View>
              </View>
              <View className="mt-8">
                <View className="flex-row justify-center items-center -ml-1"><TouchableOpacity><Send_Icon /></TouchableOpacity><Text className="text-2xl pl-3 font-semibold text-white"  style={{ fontFamily: "Barlow_medium" }}>Send only your location</Text></View>
                <View className="justify-end items-center py-3"> 
                  <Text className="text-white text-md w-3/4 pl-10"  style={{ fontFamily: "Barlow_medium" }}>SOS mode will send the location to your friends, family & local Police</Text>
                </View>
              </View>
            </View>
            {/* Container */}
        <Menu />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: "#0e1219",
    },
  });

export default EmergencyScreen