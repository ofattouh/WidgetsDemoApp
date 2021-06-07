import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Basic reducer
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Basic store
let store = createStore(combineReducers({count: counter}));

function CounterScreen({count, dispatch, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Counter Screen: {count}</Text>

      <Button title="Increment" onPress={() => dispatch({type: 'INCREMENT'})} />
      <Text>{'\n'}</Text>

      <Button title="Decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
      <Text>{'\n'}</Text>

      <Button
        title="Go to static count screen"
        onPress={() =>
          navigation.navigate('StaticCounterScreen', {
            count,
          })
        }
      />
    </View>
  );
}

function StaticCounterScreen({route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Static Counter Screen:</Text>
      <Text style={styles.paragraph}>{route.params.count}</Text>
    </View>
  );
}

// Connect the screens to Redux store
let CounterContainer = connect(state => ({count: state.count}))(CounterScreen);

let RootStack = createStackNavigator();

// Render the component wrapped with store provider
function MyReduxStore() {
  return (
    <Provider store={store}>
      <NavigationContainer
        independent={true} // warning, only 1 navigation container is allowed at root of app
      >
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="CounterScreen" component={CounterContainer} />
          <RootStack.Screen
            name="StaticCounterScreen"
            component={StaticCounterScreen}
            options={({route}) => ({title: route.params.count})}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 30,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default MyReduxStore;

// https://redux.js.org/
// https://www.npmjs.com/package/redux
// https://github.com/reduxjs/react-redux
// https://reactnavigation.org/docs/redux-integration/
