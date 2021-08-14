import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {styles, isDarkMode} from './Styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

const Section = ({children, title, setStyle = styles.sectionContainer}) => {
  return (
    <View style={setStyle}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

export default Section;
