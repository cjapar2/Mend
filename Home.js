import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.welcome}>Welcome User.</Text>
        <Text style={styles.header}>How are we feeling today?</Text>
        {/* Icon Buttons */}
        <View style={styles.moodButtons}>
          <Icon onPress={() => navigation.navigate('CalendarPage')} name="square" size={40} color="red"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="orange"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="yellow"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="lightgreen"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="green"/>
        </View>

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
    welcome: {
        bottom: '27%',
        right: '18%',
        fontSize: '30px',
        color: 'white',
    },
    header: {
        bottom: '20%',
        fontSize: '25px',
        color: 'white',
    },
    moodButtons: {
        bottom: '36%',
        alignContent: 'center',
        flexDirection: 'row',
    },
  });
  
