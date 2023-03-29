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
      const options = {
        method: "GET",
        url: "https://api.newscatcherapi.com/v2/search",
        params: { q: "Travel", lang: "en", sort_by: "relevancy", page: "1", media: "True", country: "in", source: "bbc-news"},
        headers: {
          "x-api-key": "KNYKNyVwCPOB-hdJPcNtPTwhL8UD9ZX2zv1d5ov2M30",
        },
      };

      const response = await axios.request(options);
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
      {news.slice(0, 30).map((article, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(article.link)}>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <View style={{ marginRight: 10 }}>
              {article.media ? (
                <Image
                  style={{ width: 140, height: 100, borderRadius: 10 }}
                  source={{ uri: article.media }}
                />
              ) : (
                <Image
                  style={{ width: 140, height: 100, borderRadius: 10 }}
                  source={{
                    uri: "https://tenor.com/view/loading-gif-20660982",
                  }}
                />
              )}
            </View>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  width: "100%",
                }}
                numberOfLines={2}
              >
                {article.title.split(" ").slice(0, 10).join(" ")}
                {article.title.split(" ").length > 10 ? "..." : ""}
              </Text>
              <Text style={{ color: "white", fontSize: 12, width: "100%" }}>
                {article.summary
                  ? article.summary.split(" ").slice(0, 9).join(" ") +
                    (article.summary.split(" ").length > 15 ? "..." : "")
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
