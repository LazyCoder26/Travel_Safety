import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=travel=us&apiKey=b333f7cde1f24565b15cf4b32ae6e236`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const handleRefresh = () => {
    fetchNews();
  };

  return (
    <>
    {/* add todays headline text */}
      
      {news.slice(0, 30).map((article, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(article.url)}>
          <View className="w-full flex-row my-2">
            <View className="mr-4">
              <Image
                style={{ width: 140, height: 100, borderRadius: 10 }}
                source={{ uri: article.urlToImage }}
              />
            </View>
            <View className="w-full flex-1 justify-between">
              <Text
                className="w-full text-white text-base font-bold"
                style={{ fontSize: 16 }}
              >
                {article.title.split(" ").slice(0, 10).join(" ")}
                {article.title.split(" ").length > 10 ? "..." : ""}
              </Text>
              <Text
                className="w-full text-white text-xs"
                style={{ fontSize: 12 }}
              >
                {article.description
                  ? article.description.split(" ").slice(0, 9).join(" ") +
                    (article.description.split(" ").length > 15 ? "..." : "")
                  : ""}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default NewsCard;
