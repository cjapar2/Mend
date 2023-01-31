import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import CalendarPage from './CalendarPage';
import TextMemo from './TextMemo';
import VoiceMemo from './VoiceMemo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="CalendarPage" component={CalendarPage} options={{headerShown: false}}/>
        <Stack.Screen name="TextMemo" component={TextMemo} options={{headerShown: false}}/>
        <Stack.Screen name="VoiceMemo" component={VoiceMemo} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
