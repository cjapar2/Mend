import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({navigation}) {
  const [mood, setMood] = React.useState('')
  
  /* Function that saves mood to local storage */
  const saveMood = async (e) => {
    try {
      const d = new Date();
      let dFormatted = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
      // set key with value e
      await AsyncStorage.setItem(dFormatted, e);
      // test data
      await AsyncStorage.setItem('test', 'this shows up if key is test')
      console.log('stored data', e);
      // navigate to calendar page
      navigation.navigate('CalendarPage');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.welcome}>Welcome User.</Text>
        <Text style={styles.MendWelcome}>Helping mend your mood one day at a time!</Text>

         <View style={styles.BigRectangle}>
            <Text style={styles.header}>How are we feeling today?</Text>

            {/* Color Square Buttons */}
             <View style={styles.moodButtons}>
                <Icon onPress={() => saveMood('sad')} name="square" size={50} color="red"/>
                <Icon onPress={() => saveMood('kinda sad')} name="square" size={50} color="orange" />
                <Icon onPress={() => saveMood('neutral')} name="square" size={50} color="yellow"/>
                <Icon onPress={() => saveMood('kinda happy')} name="square" size={50} color="lightgreen"/>
                <Icon onPress={() => saveMood('happy')} name="square" size={50} color="green"/>
                <Icon onPress={() => saveMood('sad')} name="square" size={50} color="green"/>
            </View> 



       </View>

        {/* Icon NavBar Buttons */}
        <View style={styles.NavBarButtons}>
        <Icon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={70} color="black"/>
        <Icon onPress={() => navigation.navigate('HistoryPage')} name="history" size={70} color="black"/>
        <Icon onPress={() => navigation.navigate('Home')} name="home-group" size={70} color="black"/>
        <Icon onPress={() => navigation.navigate('JournalPage')} name="comment-question" size={70} color="black"/>

        {/* THIS IS JUST A PLACE HOLDER */}
        <Icon onPress={() => navigation.navigate('VoiceMemo')} name="account-alert" size={70} color="black"/>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8e6d9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
        bottom: '5%',
        right: '14%',
        fontSize: '35px',
        fontWeight: '900',
        color: 'black',
    },
    MendWelcome:{
      bottom: '4%',
      right: '4%',
      fontSize: '15px',
      fontStyle: 'italic',
      fontWeight: '400',
      color: 'black',
    },
    header: {
        bottom: '28%',
        fontSize: '25px',
        color: 'white',
    },
    moodButtons: {
        bottom: '0%',
        alignContent: 'center',
        flexDirection: 'row',
    },
    NavBarButtons: {
      top: '20%',
      alignContent: 'center',
      flexDirection: 'row',
      marginHorizontal:50,
    },
    BigRectangle: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      top:'6%',
      height: 570,
      width: 360,
      borderRadius: 19,
    }
  });
  
