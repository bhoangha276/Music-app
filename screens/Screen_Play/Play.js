// import React, { useState } from "react";
// import { StyleSheet, Text, View, StatusBar } from "react-native";
// import AlbumCover from "../../API/components/AlbumCover";
// import AlbumDetails from "../../API/components/AlbumDetails";
// import Controls from "../../API/components/Controls";
// import { TRACKS } from "../../API/tracks-data";
// import { Video } from "expo-av";
// import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

// export default function PlayMusic() {
//   const [selectedTrack, setSelectedTrack] = useState(0);

//   const [pause, setPause] = useState(false);

//   const currentTrack = TRACKS[selectedTrack];

//   console.log({ currentTrack });

//   function togglePlayPauseBtn() {
//     setPause(!pause);
//   }

//   function playNextSong() {
//     if (selectedTrack === TRACKS.length - 1) {
//       setSelectedTrack(0);
//     } else {
//       setSelectedTrack(selectedTrack + 1);
//     }
//   }

//   function playPrevSong() {
//     if (selectedTrack === 0) {
//       setSelectedTrack(TRACKS.length - 1);
//     } else {
//       setSelectedTrack(selectedTrack - 1);
//     }
//   }
//   return (
//     <>
//       <StatusBar hidden></StatusBar>
//       <View style={styles.container}>
//         <AlbumCover albumCover={currentTrack.albumArtUrl}></AlbumCover>
//         <AlbumDetails
//           trackName={currentTrack.title}
//           artistName={currentTrack.artist}
//         ></AlbumDetails>
//         <View style={styles.icon}>
//           <FontAwesome5 name="heart" size={25} color='white'></FontAwesome5>
//           <FontAwesome5 name="video" size={25} color='white'></FontAwesome5>
//           <FontAwesome5 name="closed-captioning" size={25} color='white'></FontAwesome5>
//           <FontAwesome5 name="podcast" size={25} color='white'></FontAwesome5>
//         </View>
//         <Controls
//           {...{ togglePlayPauseBtn }}
//           {...{ pause }}
//           {...{ playNextSong }}
//           {...{ playPrevSong }}
//         ></Controls>
//         <Video
//           source={{ uri: currentTrack.audioUrl }}
//           audioOnly
//           paused={pause}
//         ></Video>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#42275a",
//   },
//   icon:{
//     flex:1,
//     flexDirection:'row',
//     justifyContent:'space-around',
//     paddingTop:50,
//   }
// });




import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function PlayMusic() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('./../Screen_Play/beliver.mp3')
    );
    setSound(sound);

    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
}); 