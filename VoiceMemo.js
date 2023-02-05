
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React,{useState} from 'react'
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function VoiceMemo({navigation}) {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
        </View>
      );
    });
  }

  return (
    
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
        style={styles.GradientBG}/>

            <Text style={styles.VoiceText}>Voice Memo Page</Text>
      <Text>{message}</Text>
      <FAIcon
      style={styles.playPauseIcon}
        name={recording ? 'pause-circle' : 'play-circle'}
        size={80}
        onPress={recording ? stopRecording : startRecording} />
      {getRecordingLines()}
      <StatusBar style="auto" />
    </View>
  );
}
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#20444c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    playPauseIcon:{
      
    },
    GradientBG: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000
      },
      VoiceText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        top:'10%',
        position:'absolute'
      },
      NavBarButtons: {
        top: '93%',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top:'20%'
      },
      fill: {
        flex: 1,
        margin: 16
      },
      button: {
        margin: 16
      }
  });