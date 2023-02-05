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
            <Icon onPress={() => navigation.navigate('CalendarPage')} name="square" size={50} color="red"/>
            <Icon onPress={() => {console.log('test')}} name="square" size={50} color="orange" />
            <Icon onPress={() => {console.log('test')}} name="square" size={50} color="yellow"/>
            <Icon onPress={() => {console.log('test')}} name="square" size={50} color="lightgreen"/>
            <Icon onPress={() => {console.log('test')}} name="square" size={50} color="green"/>
            <Icon onPress={() => {console.log('test')}} name="square" size={50} color="green"/>
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
<<<<<<< Updated upstream
=======
      height:'100%'
    },
    moodButton:{
      marginLeft:20,
      marginRight:10,
      marginTop:10,
      marginBottom:6
>>>>>>> Stashed changes
    },
    welcome: {
        bottom: '30%',
        right: '0%',
        fontSize: '30px',
        color: 'white',
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
  });
  
