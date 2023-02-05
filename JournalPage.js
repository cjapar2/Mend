//Page for journaling thoughts you are having in the day
// Changes made by DAANISH KHAN

import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import { TextInput, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';




// const TextInputExample = () => {
//   const [text, onChangeText] = React.useState('How are you feeling?');

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <View style={styles.container}>

<LinearGradient
        // Background Linear Gradient
        colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
        start={{ x: 0.7, y: 0 }}
        style={styles.GradientBG}
/>
          <Text style={styles.JournalEntry}>Today's Journal Entry</Text>

          <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
        fontSize: '24',
      }}>

          <TextInput
        editable
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
        returnKeyType="done"
        
      />


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


    

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
  JournalEntry: {
    bottom:'37%',
    alignContent:'center',
    fontSize: '29px',
    fontWeight: '700',
    color: 'white',
    animationType:'fade-in',
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

},);

export default MultilineTextInputExample;

