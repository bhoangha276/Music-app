import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";

const SampleTrack = require("../../API/songs/XinDungNhacMay.mp3");

export default function App() {
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
  }, []);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <View style={styles.AudioPLayer}>
        <View>
          <Image
            style={{
              width: 400,
              height: 220,
              marginBottom: 50,
              borderRadius: 20,
            }}
            source={{
              uri: "https://i.ytimg.com/vi/CegXMkbxqww/maxresdefault.jpg",
            }}
          ></Image>
        </View>
        {Loading ? (
          <ActivityIndicator size={"small"} color={"red"} />
        ) : (
          <>
            {Loaded === false ? (
              <>
                <ActivityIndicator />
              </>
            ) : (
              <>
                <View style={{ marginBottom: 30, alignItems: "center" }}>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Bai Hat: Xin Dung Nac May
                  </Text>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Ca si: B-Ray x Han Sara
                  </Text>
                </View>
                <Button title="Play" color="purple" onPress={PlayAudio} />
                <View style={{ marginBottom: 20, marginTop: 20 }}></View>
                <Button title="Pause" color="purple" onPress={PauseAudio} />
              </>
            )}
          </>
        )}
        <TouchableOpacity style={{ marginTop: 100 }}>
          <Text style={{ color: "white" }}>Back to List Songs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42275a",
  },
  AudioPLayer: {
    flex: 1,
    alignItems: "center",
  },
});
