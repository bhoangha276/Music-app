import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const { width } = Dimensions.get("window").width;

export default function PlayVideo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={{ width, height: 650, marginBottom: 10,backgroundColor:'black' }}
        source={require("../Screen_PlayMV/video.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.title}>
      <Text style={{textAlign:'center',color:'pink',fontWeight:'bold'}}>Xin Dung Nhac May [Offical MV] - B-Ray x Han Sara</Text>
      </View>
      <View style={styles.buttons}>
          <Button
          color={'black'}
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#42275a",
  },
  title:{
    marginBottom:30,
  },
  buttons: {
    alignItems: "center",
  },
});
