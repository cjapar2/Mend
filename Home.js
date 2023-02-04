import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button , Modal, TextInput} from 'react-native';
import {useState, useEffect} from 'react'
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorPicker from 'react-native-wheel-color-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [isPoppedUp, setIsPoppedUp] = useState(false)
  const [newEmotionColor, setNewEmotionColor] = useState()
  const [emotion, setEmotionChange] = useState('')

  useEffect(()=>{
    console.log("test")
  },[])
  const handlePopupClose = () =>{
    console.log("exited")
    setIsPoppedUp(false)

  }
  const [mood, setMood] = useState('')
  
  /* Function that saves mood to local storage */
  const saveMood = async (e) => {
    try {
      console.log('e', e);
      const d = new Date();
      let dFormatted = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
      // set key with value e
      await AsyncStorage.setItem(dFormatted, e);
      // test data
      await AsyncStorage.setItem('test', 'this shows up if key is test')
      console.log('stored data', e);
      // navigate to calendar page
      navigation.navigate('CalendarPage');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <Modal style={styles.modalContainer}visible={isPoppedUp} animationType="slide" transparent={true} onRequestClose={()=>{setIsPoppedUp(false)}}>
        <View style={styles.popUpHeader}>
        <FAIcon style={styles.popUpClose} size={20} name="close" onPress={()=>setIsPoppedUp(false)}></FAIcon>
        <Text style={styles.popUpHeaderText}>Add a New Emotion</Text>
        <TextInput style={styles.newEmotionText} placeholder="Enter Emotion" placeholderTextColor="#000000" value={emotion} onChangeText={(val)=>setEmotionChange(val)}></TextInput>
        <Text style={styles.colorChooseText}>Select a Color:</Text>
        <ColorPicker gapSize={-150}style={styles.colorPicker} sliderHidden={true} onColorChangeComplete={(color)=>{setNewEmotionColor(color)}}/>
        <Button style={styles.newEmotionButton}title="Create" onPress={()=>handlePopupClose()}></Button>
        </View>
      </Modal>
      
      <StatusBar style="auto" />
      <Text style={styles.welcome}>Welcome User.</Text>
      <Text style={styles.header}>How are we feeling today?</Text>

      <View style={styles.BigRectangle}>
        <Text style={styles.header}>How are we feeling today?</Text>
        {/* Icon Buttons */}
        <View style={styles.moodButtons}>
          <FAIcon style={{marginLeft: 30}} onPress={() => saveMood('date', 'red', 'sad')} name="square" size={50} color="red"/>
          <FAIcon style={{marginLeft: 30}} onPress={() => saveMood('orange')} name="square" size={50} color="orange" />
          <FAIcon style={{marginLeft: 30}} onPress={() => saveMood('yellow')} name="square" size={50} color="yellow"/>
        </View>
        <View style={styles.moreMoodButtons}>
          <FAIcon style={{marginLeft: 30}} onPress={() => saveMood('lightgreen')} name="square" size={50} color="lightgreen"/>
          <FAIcon style={{marginLeft: 30}} onPress={() => saveMood('green')} name="square" size={50} color="green"/>
          <FAIcon style={{marginLeft: 30}} onPress={() => {setIsPoppedUp(true)}} name="plus-square" size={50} />
        </View>
      </View>

      {/* Icon NavBar Buttons */}
      <View style={styles.NavBarButtons}>
        <MCIcon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={50} color="black"/>
        <MCIcon onPress={() => navigation.navigate('HistoryPage')} name="history" size={50} color="black"/>
        <MCIcon onPress={() => navigation.navigate('Home')} name="home-group" size={50} color="black"/>
        <MCIcon onPress={() => navigation.navigate('JournalPage')} name="comment-question" size={50} color="black"/>

        {/* THIS IS JUST A PLACE HOLDER */}
        <MCIcon onPress={() => navigation.navigate('VoiceMemo')} name="account-alert" size={50} color="black"/>
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
      height:'100%'
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
      bottom: '20%',
      flexDirection: 'row',
    },
    moreMoodButtons: {
      justifyContent: 'center',
      bottom: '20%',
      flexDirection: 'row',
      marginTop: 25,
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
    popUpHeaderText:{
      fontSize:'25px',
      color:'#000000',
      marginTop:'10%'
    },
    modalContainer:{
      height:'100%'
    },
    popUpClose:{
      marginLeft:'80%',
      marginTop:'4%',
    },
    colorPicker:{
      marginLeft:'auto',
      marginRight:'auto',
      bottom:'25%',
      flex:1
    },
    colorChooseText:{
      fontSize:'25px',
      marginTop:'10%'
    },
    newEmotionText:{
      marginTop:'15%',
      borderWidth:'1',
      color:'#000000',
      width:250,
      height:35
    },
    newEmotionButton:{
      marginBottom:"20%"
    },
    BigRectangle: {
      display: 'flex',
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      top:-50,
      height: 570,
      width: 360,
      borderRadius: 19,
    },
    NavBarButtons: {
      bottom: '-10%',
      alignContent: 'center',
      flexDirection: 'row',
    },
  });
  