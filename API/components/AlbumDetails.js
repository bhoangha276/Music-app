import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function AlbumDetails({trackName, artistName}) {
  return (
    <View style={{ justifyContent: "center" }}>
      <Text style={styles.name}>{artistName}</Text>
      <Text style={styles.name}>{trackName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
