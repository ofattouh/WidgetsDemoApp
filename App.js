/**
 * Muslim Prayer Companion App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const {itemId, otherParam, itemId2} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>initialParams: {JSON.stringify(itemId2)}</Text>

      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'My Details'}}
          initialParams={{itemId2: 42}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// npx react-native init MyApp
// cd ios // pod install OR npx pod-install ios
// https://reactnavigation.org/docs/navigation-prop/
// https://reactnative.dev/docs/flatlist
// https://reactnative.dev/docs/sectionlist (sectioned)
// https://reactnative.dev/docs/virtualizedlist (mutable data instead of plain arrays)
// https://reactnativeelements.com/docs/listitem/ (contacts with avatar)
// https://reactnativeelements.com/docs/searchbar/
// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
