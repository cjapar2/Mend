import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button , Modal, TextInput} from 'react-native';
import {useState, useEffect} from 'react'
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorPicker from 'react-native-wheel-color-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

 


export default function Home({navigation}) {
  const [isPoppedUp, setIsPoppedUp] = useState(false)
  const [newEmotionColor, setNewEmotionColor] = useState("#aabbcc")
  const [emotionText, setEmotionChange] = useState('')
  const [allEmotions, setAllEmotions] = useState([{color:'#FF0000', emotion:''},{color:'#FFA500',emotion:''},{color:'#FFFF00',emotion:''},{color:'#90EE90',emotion:''},{color:'#228B22',emotion:''}])
  const handlePopupClose = () =>{
    setIsPoppedUp(false)
    let temp = allEmotions
    temp.push({color:newEmotionColor,emotion:emotionText })
    setAllEmotions(temp)
    setEmotionChange('')
  }
  
  /* Function that saves mood to local storage */
  const saveMood = async (e) => {
    try {
      console.log('e', e);
      const d = new Date();
      let dFormatted = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
      // set key with value e
      // // test data
      // await AsyncStorage.setItem('test', 'this shows up if key is test')
      // console.log('stored data', e);
      // navigate to calendar page
      navigation.navigate('CalendarPage',e);
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
          <Text style={styles.colorChooseText}>Select a color that best fits your mood:</Text>
            <View style={styles.colorSelectorView}>
              <ColorPicker
                onColorChange={(color)=>{setNewEmotionColor(color)}}
                style={styles.colorPicker} thumbSize={15} sliderHidden={true} gapSize={-20}
              />
            </View>
          <TouchableOpacity style={styles.newEmotionButton} onPress={()=>handlePopupClose()}><Text style={{fontSize:30}}>Create</Text></TouchableOpacity>
        </View>
      </Modal>
      <StatusBar style="auto" />

        {/* Icon Buttons */}
        <View style={styles.moodButtonsWrap}>
          <View style={styles.moodButtons}>
            {allEmotions.map((emotion)=>{
              return (
                <View key={emotion.color} style={styles.moodButtonView}>
                  <FAIcon style={styles.moodButton} onPress={()=>saveMood({color:emotion.color})} name="square" size={85} color={emotion.color}/>
                </View>
              )
            })}

            <FAIcon style={styles.moodButton}onPress={() => {setIsPoppedUp(true)}} name="plus-square" size={85} />
          </View>
        </View>

      {/* Icon NavBar Buttons */}
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
    moodButton:{
      marginLeft:10,
      marginRight:10,
      marginTop:10,
      marginBottom:6
    },
    welcome: {
      position: 'relative',
      bottom: '19%',
      right: '24%',
      fontSize: '34px',
      fontWeight: '700',
      color: 'white',
      animationType:'fade-in',
      
    },
    MendMissionStatement: {
      bottom: '19%',
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
      bottom: '13%',
      alignContent: 'center',
      justifyContent: 'center',
      left: '2%',
      fontStyle: 'italic',
      fontWeight: '600',
      fontSize: '25px',
      color: 'white',
      marginLeft:'3%',
      marginRight:'3%'
    },
    moodButtons: {
        width:'90%',
        position: 'fixed',
        bottom: '35%',
        alignContent: 'center',
        marginLeft:'auto',
        marginRight:'auto',
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    moodButtonsWrap:{
      position:'relative',
      height:'20%',
      marginLeft:'18%',
      width:'100%',
      marginTop:'20%'
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
      height:'70%',
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
      flex:1
    },
    colorChooseText:{
      fontSize:'20px',
      marginTop:'30%',
    },
    newEmotionText:{
      marginTop:'15%',
      borderWidth:'1',
      color:'#000000',
      width:250,
      height:35,
    },
    newEmotionButton:{
      marginBottom:"20%",
      borderColor:'black',
      borderRadius:'6px',
      borderWidth:'3px'
    },
    colorSelectorView:{
      height:"40%",
      marginBottom:"15%",
      width:"90%"
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
    GradientBG: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000
    },

  });
  