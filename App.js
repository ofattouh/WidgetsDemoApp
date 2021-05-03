/**
 * Muslim Prayer Companion App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Settings from './Screens/Settings';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {title: 'Home'},
  },
  Detail: {
    screen: Detail,
    navigationOptions: {title: 'Detail'},
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {title: 'Settings'},
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    // initial route rendered when app first mounts
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
        } else if (routeName === 'Settings') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-settings`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: '#556',
      },
    }),
  },
);

export default createAppContainer(AppNavigator);

// npx react-native init MuslimPrayerCompanion
// npm install react-navigation react-navigation-stack react-navigation-tabs
// npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// cd ios // pod install
// https://reactnative.dev/docs/flatlist
// https://reactnative.dev/docs/sectionlist (sectioned)
// https://reactnative.dev/docs/virtualizedlist (mutable data instead of plain arrays)
// https://reactnativeelements.com/docs/listitem/ (contacts with avatar)
// https://reactnativeelements.com/docs/searchbar/
// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
