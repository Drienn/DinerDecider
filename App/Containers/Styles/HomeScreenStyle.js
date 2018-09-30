import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  homeContainer: {
    backgroundColor: 'skyblue',
    paddingTop: 25
  },
  cuisinePicker: {
    // overflow: 'hidden'
  }
});
