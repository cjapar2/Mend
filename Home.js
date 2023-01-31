import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.welcome}>Welcome User.</Text>
        <Text style={styles.header}>How are we feeling today?</Text>
        <TouchableOpacity
          style={styles.neutral}
          title="neutral-button"
          onPress={() => {
            console.log('user is feeling neutral')
          }}
        >
          <Icon name="emoticon-neutral" size={40} color="yellow"/>
        </TouchableOpacity>


        <TouchableOpacity>
            <Text style={{color: '#ff0000', backgroundColor: 'cyan'}}>TouchableOpacity Button</Text>
        </TouchableOpacity>

        <Button 
            title="Regular Button"
        />
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
    neutral: {
        bottom: '15%',
    },
  });
  
