import React from 'react';
import {SafeAreaView, StatusBar, View, Button, Text} from 'react-native';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';

const ResultsScreen = ({route, navigation: {goBack}}) => {
  const {tempo, times} = route.params;
  const interval = (60 / tempo) * 1000;
  const expected = [
    interval,
    3 * interval,
    3.5 * interval,
    4 * interval,
    4.25 * interval,
    4.5 * interval,
    4.75 * interval,
  ];
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.backgroundStyle}>
        <Button title="Go Back" onPress={() => goBack()} />
        <Section title="Expected">
          {expected.map(time => (
            <Text style={styles.textColor}>
              {time}
              {'ms '}
            </Text>
          ))}
        </Section>
        <Section title="Played">
          {times.map(time => {
            <Text style={styles.textColor}>
              {time}
              {'ms '}
            </Text>;
          })}
        </Section>
      </View>
    </SafeAreaView>
  );
};

export default ResultsScreen;
