// History Page will display previous journals from specific dates

// Code Initiated by Aiden Sabater

// Code Initiated by Aiden Sabater

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';

export default function HistoryPage() {
    return (
        <View style={styles.container}>
            <Text>History Page</Text>
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