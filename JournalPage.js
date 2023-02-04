//Page for journaling thoughts you are having in the day
// Changes made by DAANISH KHAN

import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



const TextInputExample = () => {
  const [text, onChangeText] = React.useState('How are you feeling?');
  const [number, onChangeNumber] = React.useState('');
  


  return (

    
    <SafeAreaView>
        <LinearGradient
      colors={["7AD7F0","92DFF3", "B7E9F7"]}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 900,
        top: 0
      }} >
          

          <Text style={{fontSize: 20, margin: 80, textAlign: 'center'}}>
            Today's Journal Entry
         </Text>

         <TextInput
            style={styles.input} 
            placeholder="How are you feeling today?"
         />

    
        </LinearGradient>



    
    
    </SafeAreaView>


    

    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 3,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical:'top'
  },


  
},);

export default TextInputExample;

