import React, {useContext, useEffect} from 'react';
import AppContext from '../Store';
import {SafeAreaView, StatusBar, ScrollView, View, Button} from 'react-native';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';

import {scan, disconnect} from '../BluetoothFunctions/Scanner';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <View style={[styles.backgroundStyle]}>
        <Button title="Home" onPress={() => navigate('Home')} />
        <Icon
          name="bluetooth-outline"
          style={styles.redButton}
          onPress={() => scan(myContext)}
        />
      </View>
    </SafeAreaView>
  );
};

export default BluetoothScreen;
