// This page will asking user the question of the day 
// Code Initiated by Aiden Sabater 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function QuestionPage() {
    return (
        <View style={styles.container}>
            <Text>QuestionPage</Text>
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