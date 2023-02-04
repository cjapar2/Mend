import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';

import TextMemo from './TextMemo';
import VoiceMemo from './VoiceMemo';

export default function CalendarPage({navigation}) {
    return (
        <View style={styles.container}>
            <Calendar style={styles.calendar}/>
            <Button 
                title="voiceButton"
                onPress={() => navigation.navigate('VoiceMemo')}
            >
                test
            </Button>
            <TouchableOpacity style={styles.textButton}
                title="textButton"
                onPress={() => navigation.navigate('TextMemo')}
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
        width: 350,
        height: 350,
        top: -120,
    },
    textButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    }
  });