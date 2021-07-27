import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {styles, isDarkMode} from './Styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

const Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;
