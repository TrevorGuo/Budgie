import {Appearance, StyleSheet} from 'react-native';

export const Colors = {
  background: '#2A2F41',
  primary: '#FFFAEF',
  green: '#5BCE47',
  red: '#E84D4D',
};

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  textColor: {
    color: Colors.primary,
  },
  arrowButton: {
    backgroundColor: Colors.background,
    color: Colors.primary,
  },
  redButton: {
    backgroundColor: Colors.red,
    color: Colors.background,
    borderRadius: 5,
    overflow: 'hidden',
    fontSize: 100,
    position: 'absolute',
  },
});
