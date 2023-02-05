import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react'


export default function CalendarPage({route}) {
    const [calendarColorData, setCalendarColorData] = useState({'2023-02-01': {color:'#FF0000',startingDay:true, endingDay:true},'2023-02-02': {color:'#FFA500', startingDay:true, endingDay:true},'2023-02-03':{color:"#FFFF00",startingDay:true, endingDay:true}})
    const [isLoading, setIsLoading] = useState(true)

    /* Function that loads mood to local storage */
    /* TODO: Use this data to individually color calendar days */

    useEffect(()=>{
        if (route.params !== undefined){
            let d = new Date();
            let dFormatted = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
            temp['2023-02-04'] = {color:route.params, startingDay:true, endingDay:true}
            setCalendarColorData(temp)
        }
        loadMoodColor()

    },[])
    useEffect(()=>{
        console.log(calendarColorData)
        calendarColorData = Object.assign(calendarColorData)
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
            <Calendar key={calendarColorData} markingType={'period'}markedDates={calendarColorData} style={styles.calendar}/>
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
    }
  });