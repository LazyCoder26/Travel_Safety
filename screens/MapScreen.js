import { View, SafeAreaView, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import Back_Icon from "../assets/SVG/Back_Icon.svg";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { useState } from "react";
import { Alert } from "react-native";

const MapScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Barlow_regular: require("../assets/Fonts/Barlow-Regular.ttf"),
    Barlow_medium: require("../assets/Fonts/Barlow-Medium.ttf"),
    Barlow_bold: require("../assets/Fonts/Barlow-Bold.ttf"),
  });

  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(37.78825);
  const [longitude, setLongitude] = useState(-122.4324);
  const mapViewRef = useRef(null);
  const screenHeight = Dimensions.get("window").height;
  
  const handlePress = async () => {
    const apiKey = "AIzaSyArqbObliTL6JIxD3720uM00qyMDF6XziY";
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const location = data.results[0].geometry.location;
      setLatitude(location.lat);
      setLongitude(location.lng);
      // Update the initial region of the map with the new latitude and longitude values
      mapViewRef.current.animateToRegion({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (error) {
      Alert.alert("Error", "Something went wrong!");
    }
  };

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style={[styles.container, { height: screenHeight }]}>
      <View className="flex justify-between items-center flex-row p-2 bg-black">
      {/* insert back icon svg over mapview in top left corner */}
      <Back_Icon
        style={{
          // position: "absolute",
          // top: 20,
          // left: 20,
          zIndex: 1,
          borderRadius: 10,
        }}
        onPress={() => navigation.goBack()}
      />
      {/* insert search bar over mapview in top right corner */}
      <TextInput
        style={{
          // position: "absolute",
          // top: 45,
          // right: 9,
          zIndex: 2,
          width: "60%",
          height: 40,
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingLeft: 10,
          fontFamily: "Barlow_regular",
        }}
        placeholder="Search"
        onChangeText={(text) => setAddress(text)}
        onSubmitEditing={handlePress}
      />
      </View>
      {/* insert mapview */}
      <MapView
        ref={mapViewRef}
        style={{ flex: 1 }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
});

export default MapScreen;