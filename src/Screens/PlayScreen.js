import {SafeAreaView, StatusBar, View, Button, Image, Text} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../Store';
import {styles, Colors, isDarkMode} from '../Styles';
import {listen} from '../BluetoothFunctions/Listener';
import {playMetronome} from '../Metronome/metronome';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayScreen = ({route, navigation: {goBack, navigate}}) => {
  const {tempo} = route.params;
  const [times, setTimes] = useState([]);
  const [showStart, setShowStart] = useState(true);
  const myContext = useContext(AppContext);

  function onStartButton() {
    setTimes([]);
    setShowStart(false);
    playMetronome(tempo)
      .then(() => {
        listen(myContext, times, setTimes);
      })
      .then(() => {
        setTimeout(() => {
          setShowStart(true);
          navigate('Results', {tempo, times: times});
        }, ((5 * 60) / tempo) * 1000);
      })
      .catch(error => console.log(error));
  }

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Image
          style={styles.sheetMusic}
          source={require('../assets/DemoRhythm.png')}
        />
      </View>
      {showStart && (
        <View style={styles.buttonContainer}>
          <Icon
            name="play-outline"
            style={[styles.bigButton, {backgroundColor: Colors.green}]}
            onPress={onStartButton}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PlayScreen;
