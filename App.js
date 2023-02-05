import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FAIcon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import CalendarPage from './CalendarPage';
import JournalPage from './JournalPage';
import HistoryPage from './HistoryPage';
import VoiceMemo from './VoiceMemo';
const Tab = createBottomTabNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false, tabBarIcon:()=>(
          <FAIcon name="home"></FAIcon>

        )}}/>
        <Tab.Screen name="CalendarPage" component={CalendarPage} options={{headerShown: false,tabBarIcon:()=>(
          <FAIcon name="calendar"></FAIcon>
  )}}/>
        <Tab.Screen name="JournalPage" component={JournalPage} options={{headerShown: false,tabBarButton:(props)=>null}}/>
        <Tab.Screen name="HistoryPage" component={HistoryPage} options={{headerShown: false,tabBarButton:(props)=>null}}/>
        <Tab.Screen name="VoiceMemo" component={VoiceMemo} options={{headerShown: false,tabBarButton:(props)=>null}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
