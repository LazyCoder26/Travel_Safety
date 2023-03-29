import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import Back_Icon from "../assets/SVG/Back_Icon.svg";
import Search from "../assets/SVG/Search.svg";
import React from "react";
import { ScrollView } from "react-native";
import { useFonts } from "expo-font";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const ExploreScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Barlow_medium: require("../assets/Fonts/Barlow-Medium.ttf"),
    Barlow_bold: require("../assets/Fonts/Barlow-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const screenHeight = Dimensions.get("window").height;

  // when press on search icon it should go to search screen and search for the place
  // when press on any of the images it should go to the place details screen

  return (
    <SafeAreaView style={[styles.container, { height: screenHeight }]}>
      <View className="w-full h-full relative">
        {/* Container */}
        <View className="mx-4 pt-4 flex">
          <View className="flex flex-row gap-2 items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back_Icon />
            </TouchableOpacity>

            <Text
              className="text-white text-xl"
              style={{ fontFamily: "Barlow_medium" }}
            >
              Explore
            </Text>
            {/* here */}
          </View>
          <View className="rounded-xl w-full h-96 mt-4">
            {/* map here */}
            {/* set initial region to India gate and show traffic */}
            <MapView style={{ flex: 1 }} initialRegion={{ latitude: 28.6129, longitude: 77.2295, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsTraffic={true}/>
            <View className="absolute top-2 right-2">
              <TouchableOpacity>
                <View
                  className="relative rounded-lg w-8 h-8 backdrop-blur-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(247, 200, 76, 0.8)" }}
                >
                  <View className="opacity-100 mt-1">
                    <Search />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            className=" rounded-xl w-full h-96 mt-4"
            style={{ backgroundColor: "rgba(247, 200, 76, 0.1)" }}
          >
            <Text className="top-1 left-2 text-xl text-white my-2">
              Explore the Variable
            </Text>
            <ScrollView className="mt-2">
              <View className="flex items-center  gap-4">
                <View
                  className="h-24 bg-cyan-500 "
                  style={{ width: "90%", borderRadius: 15 }}
                >
                  {/* insert 4 images in row */}
                  <View className="flex flex-row">
                    <Image
                      className="flex-1 h-24"
                      source={require("../assets/images/image.jpg")}
                      style={{
                        borderBottomLeftRadius: 15,
                        borderTopLeftRadius: 15,
                      }}
                    />
                    <Image
                      className="flex-1 h-24"
                      source={require("../assets/images/imagica.jpg")}
                    />
                    <Image
                      className="flex-1 h-24"
                      source={require("../assets/images/heritage.jpg")}
                    />
                    <Image
                      className="flex-1 h-24"
                      source={require("../assets/images/mountain.jpg")}
                      style={{
                        borderBottomRightRadius: 15,
                        borderTopRightRadius: 15,
                      }}
                    />
                    <View className="absolute top-2 left-2">
                      <Text
                        className="text-white text-xl"
                        style={{ fontFamily: "Barlow_bold" }}
                      >
                        Recommened Places
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  className="h-24 "
                  style={{ width: "90%", borderRadius: 15 }}
                >
                  <Image
                    source={require("../assets/images/parvat.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 15,
                    }}
                  />
                  {/* Insert a text above this image */}
                  <View className="absolute top-2 left-2">
                    <Text
                      className="text-white text-xl"
                      style={{ fontFamily: "Barlow_bold" }}
                    >
                      Natural Places
                    </Text>
                  </View>
                </View>
                <View
                  className="h-24 "
                  style={{ width: "90%", borderRadius: 15 }}
                >
                  <Image
                    source={require("../assets/images/security.jpg")}
                    style={{
                      width: "auto",
                      height: "100%",
                      borderRadius: 15,
                    }}
                  />
                  {/* Insert a text above this image */}
                  <View className="absolute top-2 left-2">
                    <Text
                      className="text-white text-xl"
                      style={{ fontFamily: "Barlow_bold" }}
                    >
                      Secure Places
                    </Text>
                  </View>
                </View>
                <View
                  className="h-24 "
                  style={{ width: "90%", borderRadius: 15 }}
                >
                  <Image
                    source={require("../assets/images/modern.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 15,
                    }}
                  />
                  {/* Insert a text above this image */}
                  <View className="absolute top-2 left-2">
                    <Text
                      className="text-white text-xl"
                      style={{ fontFamily: "Barlow_bold" }}
                    >
                      Modern Places
                    </Text>
                  </View>
                </View>
                <View
                  className="h-24 "
                  style={{
                    width: "90%",
                    borderRadius: 15,
                    backgroundColor: "rgba(247, 200, 76, 0)",
                  }}
                ></View>
              </View>
            </ScrollView>
          </View>
        </View>

        <Menu />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#0e1219",
  },
  map: {
    flex: 1,
    userInterfaceStyle: "dark",
  },

});

export default ExploreScreen;
