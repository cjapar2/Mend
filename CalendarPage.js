import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CalendarPage({navigation}) {

    /* Function that loads mood to local storage */
    /* TODO: Use this data to individually color calendar days */
    const loadMood = async () => {
        try {
            // create date object
            let d = new Date();
            // format date DD-MM-YYYY
            let dFormatted = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
            console.log('current date', dFormatted);
            let mood = await AsyncStorage.getItem(dFormatted);
            // get test data
            let test = await AsyncStorage.getItem('test')
            console.log('test data:', test)
            if (mood != null) {
                console.log(mood);
            }
        } catch (err) {
            alert(err);
        }
    }
    return (
        <View style={styles.container} theme={{textDayFontSize: 200}}>
            <Calendar style={styles.calendar}/>
            <Icon style={styles.voiceButton} name="microphone"
                onPress={() => navigation.navigate('JournalPage')}
                size={30}
            />
            <TouchableOpacity style={styles.textButton}
                title="textButton"
                onPress={() => navigation.navigate('JournalPage')}
            >
                <Text>Journal Entry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textButton}
                title="textButton"
                onPress={() => loadMood()}
            >
                <Text>Journal Entry</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#20444c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    calendar: {
        borderRadius: 10,
        width: 375,
        height: 350,
        top: -90,
    },
    textButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    voiceButton: {
        backgroundColor: 'white',
        borderRadius: 500,
        display: 'inline-block',
        padding: 20
    }
  });