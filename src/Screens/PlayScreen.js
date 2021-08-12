import {SafeAreaView, StatusBar, View, Button, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import AppContext from '../Store';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';
import {listen} from '../BluetoothFunctions/Listener';

const PlayScreen = ({navigation: {goBack}}) => {
  const [times, setTimes] = useState([]);
  const myContext = useContext(AppContext);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.backgroundStyle}>
        <Button title="Go Back" onPress={() => goBack()} />
        <Button
          title="Start"
          onPress={() => listen(myContext, times, setTimes)}
        />
        <Section title="UUIDs">
          <Text style={styles.textColor}>
            {' '}
            Device ID: {myContext.DEVICE_ID}
            {'\n\n'}
            Service UUID: {myContext.SERVICE_UUID}
            {'\n\n'}
            Characteristic UUID: {myContext.CHARACTERISTIC_UUID}
          </Text>
        </Section>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;
