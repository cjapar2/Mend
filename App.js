import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import CalendarPage from './CalendarPage';
import JournalPage from './JournalPage';
import VoiceMemo from './VoiceMemo';
import HistoryPage from './HistoryPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="CalendarPage" component={CalendarPage} options={{headerShown: false}}/>
        <Stack.Screen name="JournalPage" component={JournalPage} options={{headerShown: false}}/>
        <Stack.Screen name="VoiceMemo" component={VoiceMemo} options={{headerShown: false}}/>
        <Stack.Screen name="HistoryPage" component={HistoryPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
