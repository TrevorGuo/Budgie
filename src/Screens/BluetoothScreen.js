import React from 'react';
import {SafeAreaView, StatusBar, ScrollView, View, Button} from 'react-native';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';

import {scan} from '../BluetoothFunctions/Scanner';

const BluetoothScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.backgroundStyle]}>
        <View style={[styles.backgroundStyle]}>
          <Section title="Bluetooth">Devices</Section>
          <Button title="Scan" onPress={() => scan()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BluetoothScreen;
