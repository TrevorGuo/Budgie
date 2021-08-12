import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
} from 'react-native';
import React, {useContext, useState} from 'react';
import AppContext from '../Store';
import {styles, isDarkMode} from '../Styles';
import Section from '../Section';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation: {goBack, popToTop, navigate}}) => {
  const myContext = useContext(AppContext);
  // if (!myContext.CONNECTED) {
  //   popToTop();
  // }
  const [tempo, setTempo] = useState(80);
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.backgroundStyle}>
        <Button title="Go Back" onPress={() => goBack()} />
        <Button title="Play" onPress={() => navigate('Play')} />
        <Section title="Tempo">
          <Icon
            name="caret-back-outline"
            style={styles.arrowButton}
            onPress={() => setTempo(tempo - 1)}></Icon>
          <Text style={styles.textColor}>{tempo}</Text>
          <Icon
            name="caret-forward-outline"
            style={styles.arrowButton}
            onPress={() => setTempo(tempo + 1)}></Icon>
        </Section>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
