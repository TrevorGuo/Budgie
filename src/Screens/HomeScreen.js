import {SafeAreaView, StatusBar, ScrollView, View, Button} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import React, {useState} from 'react';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';
import Shaker from '../Shaker';

const HomeScreen = ({navigation}) => {
  const [number, setNumber] = useState(0);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <Header />
        <View style={styles.backgroundStyle}>
          <Section title="Bluetooth">
            <Button
              title="Connect to bluetooth"
              onPress={() => {
                navigation.navigate('Bluetooth');
              }}></Button>
          </Section>
          <Section title="Shaker">
            <Shaker />
          </Section>
          <Section title="Test">{number}</Section>
          <Button
            title="Click"
            onPress={() => {
              setNumber(number + 1);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
