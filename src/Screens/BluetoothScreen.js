import React, {useContext, useEffect} from 'react';
import AppContext from '../Store';
import {SafeAreaView, StatusBar, ScrollView, View, Button} from 'react-native';
import {styles, Colors, isDarkMode} from '../Styles';
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
      <Button title="Home" onPress={() => navigate('Home')} />
      <View style={[styles.backgroundStyle]}>
        <Icon
          name="bluetooth-outline"
          style={[styles.bigButton, {backgroundColor: Colors.red}]}
          onPress={() =>
            myContext.CONNECTED ? disconnect(myContext) : scan(myContext)
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default BluetoothScreen;
