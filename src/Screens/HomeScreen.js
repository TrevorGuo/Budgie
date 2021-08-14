import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Button,
  Text,
} from 'react-native';
import React, {useContext, useState} from 'react';
import AppContext from '../Store';
import {styles, Colors, isDarkMode} from '../Styles';
import Section from '../Section';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation: {goBack, popToTop, navigate}}) => {
  const myContext = useContext(AppContext);
  // if (!myContext.CONNECTED) {
  //   popToTop();
  // }
  const [tempo, setTempo] = useState(80);
  return (
    <SafeAreaView style={[styles.backgroundStyle]}>
      <View style={styles.homeView}>
        <Text style={styles.titleText}>Tempo</Text>
        <View style={styles.tempoFlexbox}>
          <Icon
            name="caret-up-outline"
            style={styles.arrowButton}
            onPress={() => setTempo(tempo + 1)}></Icon>
          <Text style={styles.tempoText}>{tempo}</Text>
          <Icon
            name="caret-down-outline"
            style={styles.arrowButton}
            onPress={() => setTempo(tempo - 1)}></Icon>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Icon
          name="checkmark-outline"
          style={[styles.bigButton, {backgroundColor: Colors.green}]}
          onPress={() => navigate('Play', {tempo})}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
