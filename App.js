import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import DriverScreen from './screens/DriverScreen';
import HistoryScreen from './screens/HistoryScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import NotificationsScreen from './screens/NotificationsScreen'
import SettingsScreen from './screens/SettingsScreen'
import SignupScreen from './screens/SignupScreen'
import TripInfoScreen from './screens/TripInfoScreen';
import TripOptionsScreen from './screens/TripOptionsScreen';
import WelcomeScreen from './screens/WelcomeScreen'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function TripBookingStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerTransparent: false,
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="TripOptions" component={TripOptionsScreen}></Stack.Screen>
      <Stack.Screen name="TripInfo" component={TripInfoScreen}></Stack.Screen>
      <Stack.Screen name="Driver" component={DriverScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}
function NavDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 0.12
        }, 
        headerTransparent: true,
      }}
    >
      <Drawer.Screen name="TripBookingStack" component={TripBookingStack}/>
      <Drawer.Screen name="History" component={HistoryScreen}/>
      <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
      <Drawer.Screen name="Settings" component={SettingsScreen}/>
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false,

        }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="Signup" component={SignupScreen}></Stack.Screen>
          <Stack.Screen name="NavDrawer" component={NavDrawer}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white'
  },
});
