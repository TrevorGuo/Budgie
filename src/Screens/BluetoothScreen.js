import React, {useContext, useEffect} from 'react';
import AppContext from '../Store';
import {SafeAreaView, StatusBar, Text, View, Button, Image} from 'react-native';
import {styles, Colors, isDarkMode} from '../Styles';

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
      <View style={styles.titleContainer}>
        <Text style={styles.titleHeader}>BUDGIE</Text>
        <Text style={styles.titleText}>Connect to your device!</Text>
      </View>
      <Image
        style={styles.bird1}
        source={require('../assets/ShakerBird1.png')}
      />
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => navigate('Home')} />
        <Icon
          name="bluetooth-outline"
          style={[styles.bigButton, {backgroundColor: Colors.red}]}
          onPress={() => scan(myContext)}
        />
      </View>
    </SafeAreaView>
  );
};

export default BluetoothScreen;
