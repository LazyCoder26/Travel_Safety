import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Google_Icon from "../assets/SVG/Google_Icon.svg";
import React from "react";

const SignInScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Barlow_regular: require("../assets/Fonts/Barlow-Regular.ttf"),
    Barlow_medium: require("../assets/Fonts/Barlow-Medium.ttf"),
    Barlow_bold: require("../assets/Fonts/Barlow-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const screenHeight = Dimensions.get("window").height;

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={[styles.container, { height: screenHeight }]}>
      <KeyboardAvoidingView behavior="height">
        <View className="h-full relative mx-6 pt-6">
          {/* Container */}
          <View className="h-full w-full">
            <View className="justify-center items-center mt-5">
              <Text
                className="text-white text-3xl"
                style={{ fontFamily: "Barlow_medium", color: "#F7C84C" }}
              >
                Welcome Back!
              </Text>
              <Text
                className="text-white text-lg opacity-50"
                style={{ fontFamily: "Barlow_regular" }}
              >
                Please sign in to your account
              </Text>
            </View>
            <View className="mt-8 flex-1">
              <TextInput
                returnKeyType="next"
                placeholderTextColor="#6c6d71"
                selectionColor="#F7C84C"
                style={styles.input}
                placeholder="Username"
              />
              <TextInput
                returnKeyType="done"
                secureTextEntry={true}
                selectionColor="#F7C84C"
                placeholderTextColor="#6c6d71"
                style={styles.input}
                placeholder="Password"
              />
              <TouchableOpacity className="w-full items-end pt-2">
                <Text className="opacity-50 text-white text-lg">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full items-center pt-6">
                <View style={styles.button}>
                  <Text
                    style={{
                      fontFamily: "Barlow_medium",
                      fontSize: 20,
                      color: "#0e1219",
                    }}
                  >
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="mb-4">
              <TouchableOpacity className="w-full items-center pt-6">
                <View style={[styles.button, { backgroundColor: "#fff" }]}>
                  <Google_Icon />
                  <Text
                    style={{
                      fontFamily: "Barlow_medium",
                      fontSize: 20,
                      color: "#0e1219",
                      paddingLeft: 10,
                    }}
                  >
                    Sign In With Google
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row w-full justify-center items-center mb-10">
              <Text className="text-white text-base">
                Don't Have An Account ?{" "}
              </Text>
              <TouchableOpacity onPress={goToSignUp}>
                <Text className="text-base" style={{ color: "#F7C84C" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Container */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#0e1219",
  },
  input: {
    backgroundColor: "#262a34",
    height: 60,
    fontSize: 20,
    borderRadius: 15,
    paddingLeft: 20,
    marginVertical: 5,
    color: "#fff",
    fontFamily: "Barlow_regular",
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#F7C84C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "Barlow_regular",
  },
});

export default SignInScreen;
