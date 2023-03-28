import { Text, View, ScrollView } from "react-native";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <View className="mt-2">
      {/* wrap the below text tags in view */}
      <View className="backdrop-blur-lg rounded-xl">
        <Text
          className="mt-2 text-white text-2xl"
          style={{ fontFamily: "Barlow_bold" }}
        >
          News
        </Text>
        <Text className="text-white text-sm mb-2">
          Today's Headlines
        </Text>
      </View>
      <ScrollView className="mt-2">
        <NewsCard />
        {/* the below code inset blank card */}
        <View className="w-full flex-row my-16">
          <View className="mr-4"></View>
          <View className="w-full flex-1 justify-between"></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default News;
