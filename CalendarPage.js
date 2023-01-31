import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TextMemo from './TextMemo';
import VoiceMemo from './VoiceMemo';

export default function CalendarPage({navigation}) {
    return (
        <View>
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
        </View>
    )
}