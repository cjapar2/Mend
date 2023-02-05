import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';


export default function CalendarPage({route, navigation}) {
    const [calendarColorData, setCalendarColorData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalDate, setModalDate] = useState('');

    /* Function that loads mood to local storage */
    /* TODO: Use this data to individually color calendar days */

    useEffect(()=>{
        if (route.params !== undefined){
            console.log("waht")
            let d = new Date();
            let dFormatted = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
            setCalendarColorData({'2023-02-01': {color:'#FF0000',startingDay:true, endingDay:true},'2023-02-02': {color:'#FFA500', startingDay:true, endingDay:true},'2023-02-03':{color:"#FFFF00",startingDay:true, endingDay:true},'2023-02-04':{color:route.params, startingDay:true,endingDay:true}})
        }
        else{
            setCalendarColorData({'2023-02-01': {color:'#FF0000',startingDay:true, endingDay:true},'2023-02-02': {color:'#FFA500', startingDay:true, endingDay:true},'2023-02-03':{color:"#FFFF00",startingDay:true, endingDay:true}})
        }
        loadMoodColor()

    },[])
    useEffect(()=>{
        console.log(calendarColorData)
    },[calendarColorData])

    const loadMoodColor = async () => {
        try {
            // create date object
            let d = new Date();
            // format date DD-MM-YYYY
            let dFormatted = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
            console.log('current date', dFormatted);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <View style={styles.container} theme={{textDayFontSize: 200}}>

        <LinearGradient
        // Background Linear Gradient
        colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
        style={styles.GradientBG}/>

            <Modal style={{}} visible={modalVisible}>
                <View style={styles.popUpHeader}>
                    <Icon style={styles.popUpClose} size={20} name="close" onPress={()=>setModalVisible(false)}></Icon>
                    <Text style={styles.popUpHeader}>Current Day: {modalDate["day"]}</Text>
                </View>
            </Modal>

            <Calendar key={calendarColorData} markingType={'period'}markedDates={calendarColorData} style={styles.calendar}
                onDayPress={e => {
                    console.log(e["day"]);
                    setModalVisible(true);
                    setModalDate(e);
                }}
            />
            {/* <Icon style={styles.voiceButton} name="microphone"
                onPress={() => navigation.navigate('JournalPage')}
                size={30}
            /> */}

            <TouchableOpacity style={styles.JournalButton}
                title="textButton"
                onPress={() => navigation.navigate('JournalPage')}
            >

                <Text style={styles.JournalButtonText}>Journal Entry</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.textButton}
                title="textButton"
                onPress={() => loadMood()}
            >
                <Text>Journal Entry</Text>
            </TouchableOpacity> */}

            <View style={styles.MicButton}>
             <Icon onPress={() => navigation.navigate('VoiceMemo')} name="microphone-plus" size={100} color="black"/>
            </View> 

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
    calendar: {
        borderRadius: 10,
        width: 375,
        height: 350,
        top: -90,
        alignContent: 'center',
        top: -25,
    },
    JournalButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        top: '12%',
        right: '18%',
        height: 90,
        width: 130,
        borderRadius: 10,
        padding: 20,
    },
    popUpHeader:{
      alignItems:'center',
      backgroundColor:'#FFFFFF',
      width:'90%',
      height:'80%',
      marginTop:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
      marginRight:'auto'
    },
    GradientBG: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000
      },
      NavBarButtons: {
        top: '35%',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      },
      MicButton: {
        top: '5%',
        left: '10%',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      },
      JournalButtonText: {
        fontSize: 20, 
        fontWeight: '800',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 1

      }
  });