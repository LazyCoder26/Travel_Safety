import React from "react";
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as Svg from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import Back_Icon from "../assets/SVG/Back_Icon.svg";
import Swap_Icon from "../assets/SVG/Swap_Icon.svg";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "English", value: "english" },
    { label: "French", value: "french" },
    { label: "Gujarati", value: "gujarati" },
    { label: "Hindi", value: "hindi" },
    { label: "Russian", value: "russian" },
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: "English", value: "english" },
    { label: "French", value: "french" },
    { label: "Gujarati", value: "gujarati" },
    { label: "Hindi", value: "hindi" },
    { label: "Russian", value: "russian" },
  ]);

  const [fontsLoaded] = useFonts({
    Barlow_medium: require("../assets/Fonts/Barlow-Medium.ttf"),
    Barlow_bold: require("../assets/Fonts/Barlow-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1" style={styles.main}>
      <View
        className="flex-row items-center px-2.5 pt-6 gap-x-2"
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back_Icon />
        </TouchableOpacity>
        <Text
          className="text-xl mb-1"
          style={{ color: "white", fontFamily: "Barlow-Medium" }}
        >
          Translate
        </Text>
      </View>
      <StatusBar style="light" />
      <View className="flex  items-center">
        <View
          style={styles.tBar}
          className="h-14 rounded-xl mt-3 bg-torea-bay-600 space flex-row items-center justify-between px-1"
        >
          <View className="flex w-36 space-y-4 ">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Swap_Icon />
            </TouchableOpacity>
          </View>
          <View className="flex w-36">
            <DropDownPicker
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
            />
          </View>
        </View>
      </View>

      {/* text input starts from here */}
      <View className="flex items-center ">
        <ScrollView style={styles.tInpbar} className="relative">
          <TextInput
            style={styles.textInp}
            placeholder="Enter text here"
            placeholderTextColor="white"
            multiline={true}
            numberOfLines={10}
            className="mt-2"
          />

          <TextInput
            style={styles.textInp}
            placeholder="Enter text here"
            placeholderTextColor="white"
            multiline={true}
            numberOfLines={10}
            className="mt-3"
          />
          <TouchableOpacity className="absolute bottom-0 right-0 mb-2 mr-2">
            <Svg.Svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/Svg.Svg"
            >
              <Swap_Icon />
            </Svg.Svg>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tBar: {
    width: "90%",
  },
  textInp: {
    color: "white",
    textAlignVertical: "top",
    multiLine: true,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    paddingLeft: 8,
    padding: 2,
  },
  tInpbar: {
    width: "90%",
  },
  main: {
    backgroundColor: "#0e1219",
    marginTop: StatusBar.currentHeight,
    height: Dimensions.get("window").height,
  },
});

export default App;
