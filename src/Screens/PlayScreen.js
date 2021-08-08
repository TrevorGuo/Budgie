import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Button,
  Text,
} from 'react-native';
import React, {useContext} from 'react';
import AppContext from '../Store';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';

const PlayScreen = ({navigation: {goBack}}) => {
  const myContext = useContext(AppContext);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.backgroundStyle}>
          <Button title="Go Back" onPress={() => goBack()} />
          <Section title="UUIDs">
            <Text>
              Service UUID: {myContext.SERVICE_UUID}
              {'\n\n'}
              Characteristic UUID: {myContext.CHARACTERISTIC_UUID}
            </Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayScreen;
