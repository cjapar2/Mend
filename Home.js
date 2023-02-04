import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button , Modal, TextInput} from 'react-native';
import {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ColorPicker from 'react-native-wheel-color-picker'

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
  return (
    <View style={styles.container}>
      <Modal style={styles.modalContainer}visible={isPoppedUp} animationType="slide" transparent={true} onRequestClose={()=>{setIsPoppedUp(false)}}>
        <View style={styles.popUpHeader}>
        <Icon style={styles.popUpClose} size={20}name="close" onPress={()=>setIsPoppedUp(false)}></Icon>
        <Text style={styles.popUpHeaderText}>Add a New Emotion</Text>
        <TextInput style={styles.newEmotionText} placeholder="Enter Emotion" placeholderTextColor="#000000" value={emotion} onChangeText={(val)=>setEmotionChange(val)}></TextInput>
        <Text style={styles.colorChooseText}>Select a Color:</Text>
        <ColorPicker gapSize={-150}style={styles.colorPicker} sliderHidden={true} onColorChangeComplete={(color)=>{setNewEmotionColor(color)}}/>
        <Button style={styles.newEmotionButton}title="Create" onPress={()=>handlePopupClose()}></Button>
        </View>
      </Modal>
        <StatusBar style="auto" />
        <Text style={styles.welcome}>Welcome User.</Text>
<<<<<<< HEAD
        <Text style={styles.MendWelcome}>Helping mend your mood one day at a time!</Text>

         <View style={styles.BigRectangle}>
            <Text style={styles.header}>How are we feeling today?</Text>

            {/* Color Square Buttons */}
             <View style={styles.moodButtons}>
                <Icon onPress={() => saveMood('sad')} name="square" size={50} color="red"/>
                <Icon onPress={() => saveMood('kinda sad')} name="square" size={50} color="orange" />
                <Icon onPress={() => saveMood('neutral')} name="square" size={50} color="yellow"/>
                <Icon onPress={() => saveMood('kinda happy')} name="square" size={50} color="lightgreen"/>
                <Icon onPress={() => saveMood('happy')} name="square" size={50} color="green"/>
                <Icon onPress={() => saveMood('sad')} name="square" size={50} color="green"/>
            </View> 



       </View>

        {/* Icon NavBar Buttons */}
        <View style={styles.NavBarButtons}>
        <Icon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={70} color="black"/>
        <Icon onPress={() => navigation.navigate('HistoryPage')} name="history" size={70} color="black"/>
        <Icon onPress={() => navigation.navigate('Home')} name="home-group" size={70} color="black"/>
        <Icon onPress={() => navigation.navigate('JournalPage')} name="comment-question" size={70} color="black"/>

        {/* THIS IS JUST A PLACE HOLDER */}
        <Icon onPress={() => navigation.navigate('VoiceMemo')} name="account-alert" size={70} color="black"/>
=======
        <Text style={styles.header}>How are we feeling today?</Text>
        {/* Icon Buttons */}
        <View style={styles.moodButtons}>
          <Icon onPress={() => navigation.navigate('CalendarPage')} name="square" size={40} color="red"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="orange"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="yellow"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="lightgreen"/>
          <Icon onPress={() => {console.log('test')}} name="square" size={40} color="green"/>
          <Icon onPress={() => {setIsPoppedUp(true)}} name="plus-square" size={40} />
>>>>>>> 32107c9ca000493069aef94450a3bf33faf623d6
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
<<<<<<< HEAD
        bottom: '5%',
        right: '14%',
        fontSize: '35px',
        fontWeight: '900',
        color: 'black',
    },
    MendWelcome:{
      bottom: '4%',
      right: '4%',
      fontSize: '15px',
      fontStyle: 'italic',
      fontWeight: '400',
      color: 'black',
=======
        bottom: '27%',
        right: '18%',
        fontSize: '30px',
        color: 'white',
>>>>>>> 32107c9ca000493069aef94450a3bf33faf623d6
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
<<<<<<< HEAD
    NavBarButtons: {
      top: '20%',
      alignContent: 'center',
      flexDirection: 'row',
      marginHorizontal:50,
    },
    BigRectangle: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      top:'6%',
      height: 570,
      width: 360,
      borderRadius: 19,
=======
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
>>>>>>> 32107c9ca000493069aef94450a3bf33faf623d6
    }
  });
  
