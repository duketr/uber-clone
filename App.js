import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HistoryScreen from './screens/HistoryScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import NotificationsScreen from './screens/NotificationsScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: true,
            headerTransparent: false
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="History" component={HistoryScreen}/>
          <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
          <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
