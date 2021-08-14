import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {styles, Colors, isDarkMode} from '../Styles';
import Section from '../Section';
import Icon from 'react-native-vector-icons/Ionicons';

const ResultsScreen = ({route, navigation: {pop}}) => {
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
console.log(expected);
console.log(times);
  function iterateThru(actual, expected) {
    const discrepency = actual.length - expected.length;
    const ALLOWANCE = 100;
    let output = [];

    discrepency > 0 ? (isActual = true) : (isActual = false);

    actual.forEach((element, index) => {
      if (Math.abs(element - expected[index]) < ALLOWANCE) {
        output.push('Correct');
      } else if (element > expected[index]) {
        output.push('Late');
      } else {
        output.push('Early');
      }
    });
    if (isActual)
      for (let i = 0; i < Math.abs(discrepency); i++) {
        output[output.length - 1 - i] = 'Extra';
      }
    else
      for (let i = 0; i < Math.abs(discrepency); i++) {
        output.push('Missed');
      }
    return output;
  }

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        <Image
          style={styles.sheetMusic}
          source={require('../assets/DemoRhythm.png')}
        />
        {iterateThru(times, expected).map((element, index) => {
          return (
            <Text style={styles.resultText} key={index}>
              Note {index + 1} was {element}
            </Text>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Icon
          name="reload-outline"
          style={[styles.bigButton, {backgroundColor: Colors.green}]}
          onPress={() => pop(2)}
        />
        <Image
          style={styles.bird2}
          source={require('../assets/ShakerBird2.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResultsScreen;
