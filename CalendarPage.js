import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';


export default function CalendarPage({route, navigation}) {
  const [calendarColorData, setCalendarColorData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDate, setModalDate] = useState('');
  const [colors, setColors] = useState()
  const [dates,setDates] = useState()
  const [journals, setJournals] = useState();
  const isFocused = useIsFocused()

  useEffect(()=>{
      handleProps()

  },[isFocused])


  const handleProps = async() =>{
    if (route.params !== undefined){
      let tempColor = "#00000"
      let tempJournal = ""
      if(route.params.color!==undefined){
        AsyncStorage.setItem("color",route.params.color)
        tempColor = await AsyncStorage.getItem("color")
      }
      else if(route.params.journal!==undefined){
        AsyncStorage.setItem("journal", route.params.journal)
        tempJournal = await AsyncStorage.getItem("journal")
        tempColor = await AsyncStorage.getItem("color")
      }
      setCalendarColorData({'2023-02-01': {color:'#FF0000',startingDay:true, endingDay:true},'2023-02-02': {color:'#FFA500', startingDay:true, endingDay:true},'2023-02-03':{color:"#FFFF00",startingDay:true, endingDay:true},'2023-02-04':{color:'#228B22', startingDay:true,endingDay:true},'2023-02-05':{color:tempColor, startingDay:true,endingDay:true}})
      setColors(['#FF0000','#FFA500',"#FFFF00","#228B22",tempColor])
      setJournals(['Feeling Exhausted','Feeling Great! Just did well on my test!','Excited to go to the beach tomorrow!','Feeling content with my life right now',tempJournal])
    }
    else {
      let sc = await AsyncStorage.getItem("color")
      if (sc === undefined) {
        setCalendarColorData({'2023-02-01': {color:'#FF0000',startingDay:true, endingDay:true},'2023-02-02': {color:'#FFA500', startingDay:true, endingDay:true},'2023-02-03':{color:"#FFFF00",startingDay:true, endingDay:true},'2023-02-04':{color:'#228B22', startingDay:true,endingDay:true},})
      setColors(['#FF0000','#FFA500',"#FFFF00","#228B22","#000000"])
      }
      else {
        setCalendarColorData({'2023-02-01': {color:'#FF0000',startingDay:true, endingDay:true},'2023-02-02': {color:'#FFA500', startingDay:true, endingDay:true},'2023-02-03':{color:"#FFFF00",startingDay:true, endingDay:true},'2023-02-04':{color:'#228B22', startingDay:true,endingDay:true},'2023-02-05':{color:sc, startingDay:true,endingDay:true}})
      setColors(['#FF0000','#FFA500',"#FFFF00","#228B22",sc])
      }
      let j = await AsyncStorage.getItem("journal")
      if (j === undefined){
        setJournals(['Feeling Exhausted','Feeling Great! Just did well on my test!','Excited to go to the beach tomorrow!','Feeling content with my life right now',''])
      }
      else {
        setJournals(['Feeling Exhausted','Feeling Great! Just did well on my test!','Excited to go to the beach tomorrow!','Feeling content with my life right now',j])
      }
    }
    setDates(['2023-02-01','2023-02-02','2023-02-03','2023-02-04','2023-02-05'])
    setIsLoading(false)
  }

  return (
    <View style={styles.container} theme={{textDayFontSize: 200}}>

      <LinearGradient
      // Background Linear Gradient
      colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
      style={styles.GradientBG}/>

        {(modalVisible) && <Modal style={styles.calendarModal}>
          <LinearGradient
            // Background Linear Gradient
            colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
            start={{ x: 0.7, y: 0 }}
            style={styles.GradientBG}
          />
          <View style={styles.popUpHeader}>
            <Icon style={styles.popUpClose} size={20} name="close" onPress={()=>setModalVisible(false)}></Icon>
            <Text style={styles.subheaders}>Date: {dates[modalDate["day"]-1]}</Text>
            <View style={styles.colorDisplayView}>
                <Text style={styles.subheaders}>Your Color Emotion: </Text>
                <FAIcon size={55} name="square" color={colors[modalDate["day"]-1]}></FAIcon>
            </View>
            <Text style={styles.subheaders}>Your Journal: </Text>
            <Text style={styles.journalText}> {journals[modalDate["day"]-1]}</Text>
          </View>
        </Modal>}

        {!isLoading && <Calendar key={calendarColorData} markingType={'period'}markedDates={calendarColorData} style={styles.calendar}
          onDayPress={e => {
            setModalVisible(true);
            setModalDate(e);
          }}
        />}

        <View style={styles.CalendarButtons}>
          <TouchableOpacity style={styles.JournalButton}
              title="textButton"
              onPress={() =>navigation.navigate('JournalPage')}
          >
            <Text style={styles.JournalButtonText}>Journal Entry</Text>
          </TouchableOpacity>

          <View style={styles.MicButton}>
            <Icon onPress={() => navigation.navigate('VoiceMemo')} name="microphone-plus" size={75} color="black"/>
          </View>
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
    width:"100%",
    height:"100%"
  },
  journalText:{
    height:'50%',
    width:'88%',
    borderColor:'black',
    borderWidth:'5px',
    borderRadius:'10px',
    fontSize:16,
    margin:'10%'
  },
  calendarModal:{
  },
  calendar: {
    borderRadius: 10,
    width: 375,
    height: 350,
    top: -90,
    alignContent: 'center',
    top: -25,
  },
  popUpHeader:{
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    width:'90%',
    height:'80%',
    marginTop:'auto',
    marginBottom:'auto',
    marginLeft:'auto',
    marginRight:'auto',
    flexDirection:'column'
  },
  GradientBG: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000
  },
  NavBarButtons: {
    top: '27%',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  CalendarButtons: {
    flexDirection: 'row',
  },
  JournalButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 70,
    width: 200,
    borderRadius: 10,
    padding: 20,
  },
  JournalButtonText: {
    fontSize: 20, 
    fontWeight: '800',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 1

  },
  colorDisplayView:{
    flexDirection:'row'
  },
  subheaders:{
    fontSize:30,
    margin:20
  }
});