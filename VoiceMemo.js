// This will be where Voice Memos are recorded
// Initiated by Aiden Sabaterimport { StatusBar } from 'expo-status-bar';


import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function VoiceMemo({navigation}) {
    return (
        <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
        style={styles.GradientBG}/>

            <Text style={styles.VoiceText}>Voice Memo Page</Text>

            {/* Icon NavBar Buttons */}
            <View style={styles.NavBarButtons}>
             <Icon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={70} color="#FF8547"/>
             <Icon onPress={() => navigation.navigate('Home')} name="home-group" size={70} color="#FF8547"/>
             <Icon onPress={() => navigation.navigate('HistoryPage')} name="history" size={70} color="#FF8547"/>
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
        bottom: '30%',
      },
      NavBarButtons: {
        top: '93%',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      },
  });