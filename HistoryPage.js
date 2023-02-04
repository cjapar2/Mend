// History Page will display previous journals from specific dates

// Code Initiated by Aiden Sabater

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HistoryPage({navigation}) {
    return (
        <View style={styles.container}>


        <View style={styles.BigMainRectangle}>
            <View style={styles.SmallMendRectangle}>
                <Text style={styles.InitialMSG}>Hope you're doing great! Here is your Mend Report from this DATE</Text>
            </View>
            <View style={styles.UserFeedbackRectangle}>
                <Text style={styles.FeedbackMSG}>USER INPUT</Text>
            </View>

        </View>






             {/* Icon NavBar Buttons */}
             <View style={styles.NavBarButtons}>
             <Icon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={70} color="black"/>
             <Icon onPress={() => navigation.navigate('HistoryPage')} name="history" size={70} color="black"/>
             <Icon onPress={() => navigation.navigate('Home')} name="home-group" size={70} color="black"/>
             <Icon onPress={() => navigation.navigate('JournalPage')} name="comment-question" size={70} color="black"/>
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
    NavBarButtons: {
        top: '10%',
        alignContent: 'center',
        flexDirection: 'row',
        marginHorizontal:50,
        marginTop:10,
      },
    BigMainRectangle: {
        backgroundColor: 'black',
        top:'3%',
        height: 710,
        width: 390,
        borderRadius: 19,
      },
    SmallMendRectangle: {
        backgroundColor: 'green',
        alignContent: 'center',
        left: '6%',
        top: '4%',
        height: 70,
        width: 345,
        borderRadius: 19,
    },
    InitialMSG: {
        top: '13%',
        left: '3%',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: '16x',
        fontWeight: '500',
        color: 'black',
        margin: 1, 
    },    
    UserFeedbackRectangle: {
        backgroundColor: 'green',
        alignContent: 'center',
        left: '6%',
        top: '8%',
        height: 200,
        width: 345,
        borderRadius: 19,
    },
    FeedbackMSG: {
        top: '13%',
        left: '3%',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: '16x',
        fontWeight: '500',
        color: 'black',
        margin: 1, 
    },
  });