import React, {useContext, useEffect} from 'react';
import AppContext from '../Store';
import {SafeAreaView, StatusBar, ScrollView, View, Button} from 'react-native';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';

import {scan, disconnect} from '../BluetoothFunctions/Scanner';

const BluetoothScreen = ({navigation: {navigate}}) => {
  const myContext = useContext(AppContext);
  useEffect(() => {
    if (myContext.CONNECTED) {
      navigate('Home');
    }
  });
  return (
    <SafeAreaView style={[styles.backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.backgroundStyle]}>
        <View style={[styles.backgroundStyle]}>
          <Button title="Home" onPress={() => navigate('Home')} />
          <Section title="Bluetooth">
            <Button
              title={myContext.CONNECTED ? 'Disconnect' : 'Scan'}
              onPress={() =>
                myContext.CONNECTED ? disconnect(myContext) : scan(myContext)
              }
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BluetoothScreen;
