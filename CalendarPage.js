import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react'
import FAIcon from 'react-native-vector-icons/FontAwesome';


export default function CalendarPage({route}) {
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

            <Modal style={{width: '20'}} visible={modalVisible}>
                <View style={styles.popUpHeader}>
                    <FAIcon style={styles.popUpClose} size={30} name="close" onPress={()=>setModalVisible(false)}></FAIcon>
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
            <Icon style={styles.voiceButton} name="microphone"
                onPress={() => navigation.navigate('JournalPage')}
                size={30}
            />

            <TouchableOpacity style={styles.textButton}
                title="textButton"
                onPress={() => navigation.navigate('JournalPage')}
            >

                <Text>Journal Entry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textButton}
                title="textButton"
                onPress={() => loadMood()}
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
        width: 375,
        height: 350,
        top: -90,
    },
    textButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    voiceButton: {
        backgroundColor: 'white',
        borderRadius: 500,
        display: 'inline-block',
        padding: 20
    },
    popUpHeader:{
      alignItems:'center',
      backgroundColor:'#FFFFFF',
      width:'90%',
      height:'75%',
      marginTop:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
      marginRight:'auto'
    },
  });