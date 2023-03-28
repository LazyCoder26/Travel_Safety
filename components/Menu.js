import { View, Text, TouchableOpacity } from "react-native";
import Menu_Home from "../assets/SVG/Menu_Home.svg";
import Menu_Emergency from "../assets/SVG/Menu_Emergency.svg";
import Menu_Map from "../assets/SVG/Menu_Map.svg";
import Menu_Translate from "../assets/SVG/Menu_Translate.svg";
import Menu_News from "../assets/SVG/Menu_News.svg";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.navigate("Home");
  };
  const navigateEmergency = () => {
    navigation.navigate("Emergency");
  };

  const navigateExplore = () => {
    navigation.navigate("Explore");
  };
  const navigateTranslate = () => {
    navigation.navigate("Translate");
  };
  const navigateWeather = () => {
    navigation.navigate("Weather");
  };

  return (
    <View
      className="w-full bottom-0 absolute left-0"
      style={{ backgroundColor: "rgba(14, 18, 25,0.95)" }}
    >
      <View className="flex-row py-4 px-4 w-full items-center justify-around">
        <TouchableOpacity onPress={navigateHome}>
          <Menu_Home />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateExplore}>
          <Menu_Map />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateTranslate}>
          <Menu_Translate />
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu_News />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateEmergency}>
          <Menu_Emergency />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
