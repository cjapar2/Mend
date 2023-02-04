import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button , Modal, TextInput} from 'react-native';
import {useState, useEffect} from 'react'
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorPicker from 'react-native-wheel-color-picker'
import { LinearGradient } from 'expo-linear-gradient';
 


export default function Home({navigation}) {
  const [isPoppedUp, setIsPoppedUp] = useState(false)
  const [newEmotionColor, setNewEmotionColor] = useState("#aabbcc")
  const [emotionText, setEmotionChange] = useState('')
  const [allEmotions, setAllEmotions] = useState([{color:'#FF0000', emotion:'sad'},{color:'#FFA500',emotion:''},{color:'#FFFF00',emotion:''},{color:'#90EE90',emotion:''},{color:'#228B22',emotion:''}])
  useEffect(()=>{
    allEmotions.map((emotion)=>{
      console.log(emotion)
    })
  })
  useEffect(()=>{
    console.log(newEmotionColor)
  },[newEmotionColor])
  const handlePopupClose = () =>{
    
    console.log("exited")
    console.log(emotionText,newEmotionColor)
    setIsPoppedUp(false)
    let temp = allEmotions
    temp.push({color:newEmotionColor,emotion:emotionText })
    setAllEmotions(temp)
    setEmotionChange('')
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

<LinearGradient
        // Background Linear Gradient
        colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
        start={{ x: 0.7, y: 0 }}
        style={styles.GradientBG}
      />
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.MendMissionStatement}>Helping mend your day one color at a a time</Text>
        

<Text style={styles.header}>What color describes your mood today?</Text>

      <Modal style={styles.modalContainer}visible={isPoppedUp} animationType="slide" transparent={true} onRequestClose={()=>{setIsPoppedUp(false)}}>
        <View style={styles.popUpHeader}>
        <FAIcon style={styles.popUpClose} size={20} name="close" onPress={()=>setIsPoppedUp(false)}></FAIcon>
        <Text style={styles.popUpHeaderText}>Add a New Emotion</Text>
        <TextInput style={styles.newEmotionText} placeholder="Enter Emotion" placeholderTextColor="#000000" value={emotionText} onChangeText={(val)=>setEmotionChange(val)}></TextInput>
        <Text style={styles.colorChooseText}>Select a Color:</Text>
        <View style={styles.colorSelectorView}>
            <ColorPicker
        onColorChange={(color)=>{setNewEmotionColor(color)}}
        style={styles.colorPicker} thumbSize={15} sliderHidden={true} gapSize={-40}
      />
        </View>
        <Button style={styles.newEmotionButton}title="Create" onPress={()=>handlePopupClose()}></Button>
        </View>
      </Modal>
        <StatusBar style="auto" />

        {/* Icon Buttons */}
        <View style={styles.moodButtons}>
          {allEmotions.map((emotion)=>{
            return (
              <View key={emotion.color} style={styles.moodButtonView}>
                <FAIcon style={styles.moodButton} onPress={()=>saveMood(emotion.color,emotion.emotion)} name="square" size={85} color={emotion.color}/>
                <Text style={styles.moodSquareEmotionText}>{emotion.emotion}</Text>
              </View>
            )
            
          })}

          <FAIcon style={styles.moodButton}onPress={() => {setIsPoppedUp(true)}} name="plus-square" size={50} />
        </View>



        {/* Icon NavBar Buttons */}
        <View style={styles.NavBarButtons}>
        <MCIcon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={70} color="FF8547"/>
        <MCIcon onPress={() => navigation.navigate('Home')} name="home-group" size={70} color="FF8547"/>
        <MCIcon onPress={() => navigation.navigate('HistoryPage')} name="history" size={70} color="FF8547"/>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100%'
    },
    GradientBG: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000
    },
    moodButton:{
      marginLeft:10,
      marginRight:10,
      marginTop:10,
      marginBottom:6
    },
    welcome: {
      position: 'relative',
      bottom: '26%',
      right: '24%',
      fontSize: '34px',
      fontWeight: '700',
      color: 'white',
      animationType:'fade-in',
      
    },
    MendMissionStatement: {
      bottom: '26%',
      padding: 3,
      right: '7%',
      fontSize: '14 px',
      fontStyle: 'italic',
      fontWeight: '300',
      color: 'white',
      animationType:'fade-in'
    },
    NavBarButtons:{
      flexDirection:'row',
      position:'absolute',
      bottom:"1%"
    },
    header: {
      bottom: '23%',
      alignContent: 'center',
      justifyContent: 'center',
      left: '2%',
      fontStyle: 'italic',
      fontWeight: '600',
      fontSize: '25px',
      color: 'white',
    },
    moodButtons: {
        bottom: '%',
        alignContent: 'center',
        marginLeft:'5%',
        marginRight:'5%',
        flexDirection: 'row',
        flexWrap:'wrap',
        borderRadius:'5px',
        borderWidth:'2px',
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
      bottom:'15%',
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
      height:35,
    },
    newEmotionButton:{
      marginBottom:"20%"
    },
    colorSelectorView:{
      height:"40%",
      marginBottom:"15%"
    },
    moodSquareEmotionText:{
      fontSize:"14px",
      color:'#000000',
      marginLeft:'auto',
      marginRight:'auto'
    },
    moodButtonView:{
      flexDirection:"wrap"
    },

  });
  