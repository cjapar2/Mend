//Page for journaling thoughts you are having in the day
// Changes made by DAANISH KHAN

import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




const TextInputExample = () => {
  const [text, onChangeText] = React.useState('How are you feeling?');

  

  return (
    <SafeAreaView style={styles.container}>

<LinearGradient
        // Background Linear Gradient
        colors={['#FFA071', '#FFB480', '#FEC98F', '#FEDD9E','#FDF1AD']}
        start={{ x: 0.7, y: 0 }}
        style={styles.GradientBG}
/>

          <Text style={{fontSize: 20, margin: 80, textAlign: 'center'}}>
            Today's Journal Entry
          </Text>

         <TextInput
            style={styles.input} 
            placeholder="How are you feeling today?"
        />

        {/* Icon NavBar Buttons */}
        <View style={styles.NavBarButtons}>
        <MCIcon onPress={() => navigation.navigate('CalendarPage')} name="calendar-heart" size={70} color="#FF8547"/>
        <MCIcon onPress={() => navigation.navigate('Home')} name="home-group" size={70} color="#FF8547"/>
        <MCIcon onPress={() => navigation.navigate('HistoryPage')} name="history" size={70} color="#FF8547"/>
        </View>
    
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
  GradientBG: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000
  }

},);

export default TextInputExample;

