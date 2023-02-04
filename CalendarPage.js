import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import JournalPage from './JournalPage';
import VoiceMemo from './VoiceMemo';

export default function CalendarPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Calendar Page</Text>
            <Button
                title="textButton"
                onPress={() => navigation.navigate('TextMemo')}
            >
                test
            </Button>
            <Button 
                title="voiceButton"
                onPress={() => navigation.navigate('VoiceMemo')}
            >
                test
            </Button>
<<<<<<< Updated upstream
=======
            <TouchableOpacity style={styles.textButton}
                title="textButton"
                onPress={() => navigation.navigate('JournalPage')}
            >
                <Text>Journal Entry</Text>
            </TouchableOpacity>
>>>>>>> Stashed changes
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
  });