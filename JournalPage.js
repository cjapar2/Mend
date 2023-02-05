//Page for journaling thoughts you are having in the day
// Changes made by DAANISH KHAN

import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, Button,Keyboard, TouchableWithoutFeedback } from 'react-native';
import { TextInput, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useEffect} from 'react'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';




// const TextInputExample = () => {
//   const [text, onChangeText] = React.useState('How are you feeling?');

export default function JournalPage({navigation}){
  const [value, onChangeText] = React.useState();

  useEffect(()=>{
    console.log(value)
  },[value])

  const submitJournalEntry = () =>{
    navigation.navigate('CalendarPage',value)
  }
  return (
    <View style={styles.container}>

<LinearGradient
        // Background Linear Gradient
        colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
        start={{ x: 0.7, y: 0 }}
        style={styles.GradientBG}
/>
          <Text style={styles.JournalEntryHeader}>Today's Journal Entry</Text>

          <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
        fontSize: '24',
      }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.JournalEntryWrapper}>
            <TextInput textAlignment="center"multiline={true} underlineColorAndroid="transparent" style={styles.JournalEntry} placeholder="Start Typing Here..." onChangeText={onChangeText
            }></TextInput>
          </View>
          </TouchableWithoutFeedback>
          
          <TouchableOpacity style={styles.submitJournalEntryButton} onPress={submitJournalEntry()}><Text style={styles.submitText}>Submit</Text></TouchableOpacity>


 </View>

          {/* <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      /> */}

         {/* <TextInput
            style={styles.input} 
            placeholder="How are you feeling today?"
        /> */}

        {/* Icon NavBar Buttons */}
        <View style={styles.NavBarButtons}>
        <MCIcon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={70} color="#FF8547"/>
        <MCIcon onPress={() => navigation.navigate('Home')} name="home-group" size={70} color="#FF8547"/>
        <MCIcon onPress={() => navigation.navigate('HistoryPage')} name="history" size={70} color="#FF8547"/>
        </View>
    
    </View>

)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    position:'relative'
  },
  submitText:{
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'auto',
    fontSize:35,
    fontWeight:'700',
    color:'white'
  },
  submitJournalEntryButton:{
      borderWidth:'5px',
      borderColor:'white',
      borderRadius:'3px',
      backgroundColor:'transparent',
      width:150,
      height:50,
      bottom:30,
      marginBottom:'auto',
      marginTop:'auto'
      
  },
  JournalEntryHeader: {
    bottom:'3%',
    alignContent:'center',
    fontSize: '29px',
    fontWeight: '700',
    color: 'white',
    animationType:'fade-in',
    position:'fixed'
  },
  GradientBG: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000
  },
  NavBarButtons:{
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'row',
    position:'absolute',
    bottom:"1%"
  },
  JournalEntry:{
    outline:'none',
    position:'fixed',
    marginRight:'auto',
    marginLeft:'auto',
    margin:20,
    borderBottomColor:'transparent',
  },
  JournalEntryWrapper:{
    width:'90%',
    height:'70%'
  }


},);


