import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window").width;

export default function AlbumCover({ albumCover }) {
  return (
    <View style={{ margin: 10 }}>
      <Image
        source={{ uri: albumCover }}
        style={{ width, height: 300, borderRadius: 5 }}
        resizeMode={'contain'}
      ></Image>
    </View>
  );
}
