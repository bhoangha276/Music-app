import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AlbumCover from "../../API/components/AlbumCover";
import AlbumDetails from "../../API/components/AlbumDetails";
import Controls from "../../API/components/Controls";
import { TRACKS } from "../../API/tracks-data";
import { Video } from "expo-av";

export default function PlayMusic() {
  const [selectedTrack, setSelectedTrack] = useState(0);

  const [pause, setPause] = useState(false);

  const currentTrack = TRACKS[selectedTrack];

  console.log({ currentTrack });

  function togglePlayPauseBtn() {
    setPause(!pause);
  }

  function playNextSong() {
    if (selectedTrack === TRACKS.length - 1) {
      setSelectedTrack(0)
    } else {
      setSelectedTrack(selectedTrack + 1);
    }
  }

  function playPrevSong() {
    if (selectedTrack === 0) {
      setSelectedTrack(TRACKS.length - 1);
    } else {
      setSelectedTrack(selectedTrack - 1);
    }
  }
  return (
    <>
      <StatusBar hidden></StatusBar>
      <View style={styles.container}>
        <AlbumCover albumCover={currentTrack.albumArtUrl}></AlbumCover>
        <AlbumDetails
          trackName={currentTrack.title}
          artistName={currentTrack.artist}
        ></AlbumDetails>
        <Controls
          {...{ togglePlayPauseBtn }}
          {...{ pause }}
          {...{ playNextSong }}
          {...{ playPrevSong }}
        ></Controls>
        <Video
          source={{ uri: currentTrack.audioUrl }}
          audioOnly
          paused={pause}
        ></Video>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42275a",
  },
});
