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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.backgroundStyle}>
          <Button title="Go Back" onPress={() => goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultsScreen;
