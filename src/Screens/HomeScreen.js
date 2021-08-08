import {SafeAreaView, StatusBar, ScrollView, View, Button} from 'react-native';
import React, {useContext} from 'react';
import AppContext from '../Store';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';

const HomeScreen = ({navigation: {goBack, popToTop, navigate}}) => {
  const myContext = useContext(AppContext);
  if (!myContext.CONNECTED) {
    popToTop();
  }
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.backgroundStyle}>
          <Button title="Go Back" onPress={() => goBack()} />
          <Button title="Play" onPress={() => navigate('Play')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
