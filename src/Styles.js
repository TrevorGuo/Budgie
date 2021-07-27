import {Appearance, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const isDarkMode = Appearance.getColorScheme() === 'dark';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  },
  textColor: {
    color: isDarkMode ? Colors.white : Colors.black,
  },
});
