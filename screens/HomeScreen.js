import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Menu from "../components/Menu"
import React from "react";
import Translate from "../assets/SVG/Translate_Icon.svg";
import Weather_Icon from "../assets/SVG/Weather_Icon.svg";
import Emergency from "../assets/SVG/Emergency.svg";
import Explore from "../assets/SVG/Explore.svg";
import Hospital from "../assets/SVG/hospital.svg";
import Ticket from "../assets/SVG/ticket.svg";
import News from "../components/News";
import { Avatar } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

StatusBar.setBackgroundColor("#0e1219", true);

const HomeScreen = () => {

  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;

const navigateEmergency = () => {
  navigation.navigate('Emergency');
}
const navigateTranslate = () => {
  navigation.navigate('Translate');
}

const navigateExplore = () => {
  navigation.navigate('Explore');
};
const navigateWeather = () => {
  navigation.navigate('Weather');
};
const navigateSignIn = () => {
  navigation.navigate('SignIn');
};

  return (
    <SafeAreaView style={styles.container}>
      {/* NavBar */}
      <View className="mx-4 mt-6" style={{height: screenHeight}}>
        <View className=" flex-row items-center">
          <Text
            className="text-white text-xl flex-1"
            style={{ fontFamily: "Barlow_medium" }}
          >
            Good Morning!
          </Text>
          <TouchableOpacity onPress={navigateSignIn}>
          <Avatar
            size={45}
            rounded
            icon={(source = "../assets/SVG/User_Icon.svg")}
            iconStyle={{}}
            containerStyle={{ backgroundColor: "#F7C84C" }}
            // source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{ fontFamily: "Barlow_bold" }}
            className="text-white text-3xl"
          >
            Discover The India
          </Text>
        </View>
        {/* Buttons */}
        <View className="mt-4">
          <View
            className="flex-row w-full justify-between relative my-1"
            style={{ height: 88 }}
          >
            <TouchableOpacity className="flex-1 mr-2">
              <View
                className=" h-full flex-row items-center justify-center"
                style={{
                  fontFamily: "Barlow_bold",
                  backgroundColor: "#F7C84C",
                  borderRadius: 20,
                }}
              >
                <Translate />
                <Text className="pl-2 font-semibold" style={{ fontSize: 28 }}>
                  Translate
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateWeather}>
              <View
                style={{ backgroundColor: "#5F6DF3", borderRadius: 20 }}
                className="h-full flex-row items-center justify-center px-8"
              >
                <Weather_Icon width={60} height={60} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            className="flex-row w-full justify-between relative my-1"
            style={{ height: 88 }}
          >
            <TouchableOpacity className="mr-2">
              <View
                style={{ backgroundColor: "#fff", borderRadius: 20 }}
                className="h-full flex-row items-center justify-center px-8"
              >
                <Hospital width={60} height={60} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1" onPress={navigateEmergency}>
              <View
                className=" h-full flex-row items-center justify-center"
                style={{
                  fontFamily: "Barlow_bold",
                  backgroundColor: "#FC5750",
                  borderRadius: 20,
                }}
              >
                <Emergency />
                <Text
                  className="text-2xl font-semibold pl-2"
                  style={{ fontSize: 28 }}
                >
                  Emergency
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            className="flex-row w-full justify-between relative my-1"
            style={{ height: 88 }}
          >
            <TouchableOpacity className="flex-1 mr-2" onPress={navigateExplore}>
              <View
                className=" h-full flex-row items-center justify-center"
                style={{
                  fontFamily: "Barlow_bold",
                  backgroundColor: "#8AE990",
                  borderRadius: 20,
                }}
              >
                
                <Explore />
                <Text
                  className="text-2xl font-semibold pl-4"
                  style={{ fontSize: 28 }}
                >
                   Explore
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ backgroundColor: "#fff", borderRadius: 20 }}
                className="h-full flex-row items-center justify-center px-8"
              >
                <Ticket width={60} height={60} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Buttons Ends */}
        {/* News Starts */}
        <View className="h-1/2 absolute bottom-8 left-0">
          <News />
        </View>
        {/* News Ends */}
      </View>
      {/* Menu Starts */}
          <Menu />
        {/* Menu Ends */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#0e1219",
  },
});
