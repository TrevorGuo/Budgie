import {SafeAreaView, StatusBar, View, Button, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import AppContext from '../Store';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';
import {listen} from '../BluetoothFunctions/Listener';
import {playMetronome} from '../Metronome/metronome';

const PlayScreen = ({route, navigation: {goBack, navigate}}) => {
  const {tempo} = route.params;
  const [times, setTimes] = useState([]);
  const myContext = useContext(AppContext);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.backgroundStyle}>
        <Button title="Go Back" onPress={() => goBack()} />
        <Button
          title="Results"
          onPress={() => navigate('Results', {tempo, times: [0, 1, 2]})}
        />
        <Button
          title="Start"
          onPress={() => {
            playMetronome(tempo)
              .then(() => {
                listen(myContext, tempo, times, setTimes);
              })
              .then(() => {
                navigate('Results', {tempo, times});
              })
              .catch(error => console.log(error));
          }}
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
