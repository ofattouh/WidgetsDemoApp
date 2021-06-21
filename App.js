/**
 * Muslim Prayer Companion App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './Screens/Header';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import Widgets from './Screens/Widgets';
import MyReduxStore from './DataStore/MyReduxStore';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          // apply to all screens in the navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Arial',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              // pass additional props
              headerTitle: props => <Header {...props} />,
              title: 'Awesome app',
              headerRight: () => (
                <Button
                  onPress={() => alert('Right clicked!')}
                  title="Click me"
                  color="#2A52BE"
                />
              ),
            }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            // options={({ navigation, route }) => ({
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
              headerLeft: () => (
                <Button
                  onPress={() => alert('Left clicked!')}
                  title="Click me"
                  color="#2A52BE"
                />
              ),
            })}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            // options={{headerShown: false}}
            // options={({route, navigation}) => ({
            // title: route.params.name,
            // })}
            options={({route}) => ({title: route.params.name})}
            initialParams={{itemId2: 42}}
          />

          <Stack.Screen name="MyReduxStore" component={MyReduxStore} />

          <Stack.Screen
            name="Widgets"
            component={Widgets}
            // ProfileScreen module is lazily evaluated when needed. useful when using ram bundles to improve initial load
            // getComponent={() => require('./ProfileScreen').default}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

// npx react-native init MyApp
// cd ios // pod install OR npx pod-install ios
// https://reactnavigation.org/docs/navigation-prop/
// https://github.com/vonovak/react-navigation-header-buttons
// https://github.com/oblador/react-native-vector-icons
