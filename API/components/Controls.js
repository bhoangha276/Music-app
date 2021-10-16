import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function Controls({ togglePlayPauseBtn, pause, playNextSong,playPrevSong }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={playNextSong} >
        <AntDesign name="stepbackward" size={30} color="white"></AntDesign>
      </TouchableOpacity>

      {pause ? (
        <TouchableOpacity style={styles.playPauseBtn} onPress={togglePlayPauseBtn}>
          <AntDesign name="playcircleo" size={30} color="#42275a"></AntDesign>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playPauseBtn} onPress={togglePlayPauseBtn}>
          <AntDesign name="pausecircleo" size={30} color="#42275a"></AntDesign>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={playPrevSong} >
        <AntDesign name="stepforward" size={30} color="white"></AntDesign>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
marginBottom:120,
  },
  playPauseBtn: {
    width: 120,
    height: 120,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 20,
    borderColor: "#42275a",
    margin: 20,
  },
});
