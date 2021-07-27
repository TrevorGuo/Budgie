/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import HomeScreen from './Screens/HomeScreen';
import BluetoothScreen from './Screens/BluetoothScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [number, setNumber] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const headerOptions = {
    headerStyle: backgroundStyle,
    headerTintColor: isDarkMode ? Colors.white : Colors.black,
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name="Bluetooth"
          component={BluetoothScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
