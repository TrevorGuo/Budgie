import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Button,
  Text,
} from 'react-native';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';

const ResultsScreen = ({navigation: {goBack}}) => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.backgroundStyle}>
        <Button title="Go Back" onPress={() => goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default ResultsScreen;
