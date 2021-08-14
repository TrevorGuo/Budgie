/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import AppContext from './Store';
import HomeScreen from './Screens/HomeScreen';
import BluetoothScreen from './Screens/BluetoothScreen';
import PlayScreen from './Screens/PlayScreen';
import ResultsScreen from './Screens/ResultsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useColorScheme} from 'react-native';
import {Colors} from './Styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const headerOptions = {
    headerStyle: backgroundStyle,
    headerTintColor: isDarkMode ? Colors.white : Colors.black,
    headerShown: false,
    gestureEnabled: false,
  };

  const Stack = createStackNavigator();

  const [SERVICE_UUID, setSUUID] = useState('0');
  const [CHARACTERISTIC_UUID, setCUUID] = useState('0');
  const [CONNECTED, setConnected] = useState(false);
  const [DEVICE_ID, setDeviceID] = useState('0');

  const UUIDs = {
    SERVICE_UUID: SERVICE_UUID,
    CHARACTERISTIC_UUID: CHARACTERISTIC_UUID,
    CONNECTED: CONNECTED,
    DEVICE_ID: DEVICE_ID,
    setSUUID,
    setCUUID,
    setConnected,
    setDeviceID,
  };

  return (
    <AppContext.Provider value={UUIDs}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bluetooth"
            component={BluetoothScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Play"
            component={PlayScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Results"
            component={ResultsScreen}
            options={headerOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
