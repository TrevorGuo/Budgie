import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Button,
  Text,
} from 'react-native';
import React, {useState, useContext} from 'react';
import AppContext from '../Store';
import {styles, Colors} from '../Styles';
import Section from '../Section';
import Shaker from '../Shaker';
import {listen} from '../BluetoothFunctions/Listener';
import SheetMusic from '../SheetMusic/SheetMusic';

const PlayScreen = ({navigation: {goBack}}) => {
  const [expectedTimes, setExpectedTimes] = useState([]);
  const [times, setTimes] = useState([]);
  const myContext = useContext(AppContext);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Button title="Go Back" onPress={() => goBack()} />
      <Button
        title="Start"
        onPress={() => {
          setExpectedTimes([1000, 2000, 3000, 4000]);
          listen(myContext, times, setTimes);
        }}
      />
      <SheetMusic />
    </SafeAreaView>
  );
};

export default PlayScreen;
