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
import { useNavigation } from '@react-navigation/native';
import Google_Icon from "../assets/SVG/Google_Icon.svg";
import React from 'react'

const SignUpScreen = () => {
    const navigation = useNavigation();
    // change status bar color
    StatusBar.setBarStyle('dark-content', true);

    const [fontsLoaded] = useFonts({
        Barlow_regular: require("../assets/Fonts/Barlow-Regular.ttf"),
        Barlow_medium: require("../assets/Fonts/Barlow-Medium.ttf"),
        Barlow_bold: require("../assets/Fonts/Barlow-Bold.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }

    const screenHeight = Dimensions.get('window').height;

      const goToSignIn = () => {
        navigation.navigate('SignIn');
      }

  return (
    <SafeAreaView style={[styles.container, { height: screenHeight }]} >
        <KeyboardAvoidingView 
        behavior="height"
      style={{ flex: 1 }}
      enabled>
        <View className="h-full relative mx-6 pt-6">
            {/* Container */}   
            <View className="h-full w-full">
                <View className="justify-center items-center mt-5">
                    <Text className="text-white text-3xl" style={{ fontFamily: "Barlow_medium" , color : "#F7C84C" }}>Create New Account</Text>
                    <Text className="text-white text-base opacity-50" style={{ fontFamily: "Barlow_regular" }}>Please fill in the form to continue</Text>
                </View>
                <View className="mt-8 flex-1 pb-2">
                    <TextInput returnKeyType="next" placeholderTextColor="#6c6d71" selectionColor="#F7C84C" style={styles.input} placeholder="Full Name"/>
                    <TextInput returnKeyType="next" keyboardType="email-address" placeholderTextColor="#6c6d71" selectionColor="#F7C84C" style={styles.input} placeholder="Email Address"/>
                    <TextInput secureTextEntry={true} selectionColor="#F7C84C" placeholderTextColor="#6c6d71" style={styles.input} placeholder="Password" returnKeyType="done"/>
                    <TouchableOpacity className="w-full items-center pt-6"><View style={styles.button}><Text style={{ fontFamily: "Barlow_medium" , fontSize : 20 , color : "#0e1219" }}>Sign Up</Text></View></TouchableOpacity>
                </View>
                <View className="mb-4">
                    <TouchableOpacity className="w-full items-center pt-6"><View style={[styles.button , {backgroundColor : "#fff"}]}><Google_Icon /><Text style={{ fontFamily: "Barlow_medium" , fontSize : 20 , color : "#0e1219" , paddingLeft : 10 }}>Sign Up With Google</Text></View></TouchableOpacity>
                </View>
                <View className="flex-row w-full justify-center items-center mb-10"><Text className="text-white text-base">Have An Account ?  </Text><TouchableOpacity onPress={goToSignIn}><Text className="text-base" style={{color : "#F7C84C"}}>Sign In</Text></TouchableOpacity></View>
            </View>
            {/* Container */}
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: "#0e1219",
    },
    input:{
        backgroundColor: "#262a34",
        height: 60,
        fontSize: 20,
        borderRadius : 15,
        paddingLeft : 20,
        marginVertical : 5,
        color : "#fff",
        fontFamily: "Barlow_regular"
    },
    button:{
        width: "100%",
        height: 60,
        backgroundColor: "#F7C84C",
        borderRadius : 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        fontFamily: "Barlow_regular",
    }
  });

export default SignUpScreen