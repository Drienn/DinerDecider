import { StackNavigator } from 'react-navigation';
import Results from '../Containers/Results';
import HomeScreen from '../Containers/HomeScreen';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    Results: { screen: Results },
    HomeScreen: { screen: HomeScreen },
    LaunchScreen: { screen: LaunchScreen },
    ResultsScreen: { screen: Results }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
