import {Dimensions, StyleSheet} from 'react-native';

export const Colors = {
  background: '#2A2F41',
  primary: '#FFFAEF',
  green: '#5BCE47',
  red: '#E84D4D',
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  titleContainer: {
    backgroundColor: Colors.background,
    marginTop: windowHeight / 2,
    marginLeft: windowWidth / 48,
    // marginLeft: windowWidth / 8,
    // left: -0.43 * windowWidth,
    // top: windowWidth / 6,
  },
  titleHeader: {
    color: Colors.primary,
    fontFamily: 'Bungee-Regular',
    fontSize: 72,
  },
  titleText: {
    color: Colors.primary,
    fontFamily: 'SecularOne-Regular',
    fontSize: 36,
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textColor: {
    color: Colors.primary,
  },
  arrowButton: {
    backgroundColor: Colors.background,
    color: Colors.primary,
    fontSize: 48,
  },
  tempoFlexbox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  tempoText: {
    fontSize: 24,
    color: Colors.primary,
  },
  homeView: {
    flexDirection: 'column',
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.background,
    justifyContent: 'flex-end',
    height: windowHeight,
  },
  bigButton: {
    color: Colors.background,
    borderRadius: 18,
    overflow: 'hidden',
    fontSize: windowWidth / 8,
    margin: windowWidth / 32,
  },
  bird1: {
    position: 'absolute',
    resizeMode: 'contain',
    height: (windowHeight * 3) / 5,
    width: (windowWidth * 2) / 3,
    left: windowWidth / 4,
  },
  bird2: {
    position: 'absolute',
    resizeMode: 'contain',
    height: windowWidth / 6,
    width: windowWidth / 6,
    right: windowWidth / 9,
    bottom: windowWidth / 9,
  },
  sheetMusic: {
    resizeMode: 'contain',
    flex: 1,
  },
  resultText: {
    color: Colors.primary,
    fontFamily: 'SecularOne-Regular',
    fontSize: 18,
  },
});
