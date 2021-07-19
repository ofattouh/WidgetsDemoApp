import * as React from 'react';
import {StyleSheet, View, Button, Text, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home Screen</Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Test Fade"
        onPress={() => navigation.navigate('TestFade')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Test Config"
        onPress={() => navigation.navigate('TestConfig')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Test Header Interpolator"
        onPress={() => navigation.navigate('TestHeaderInterpolator')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Test Card Interpolator"
        onPress={() => navigation.navigate('TestCardInterpolator')}
      />
      <Text>{'\n'}</Text>
    </View>
  );
}

function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Profile Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function TestFade({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Test Fade Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function TestConfig({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Test Config Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function TestHeaderInterpolator({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Test Header Interpolator Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function TestCardInterpolator({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Test Card Interpolator Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

const forFadeTest = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
      mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My Profile',
          headerStyleInterpolator: forFade,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />

      <Stack.Screen
        name="TestFade"
        component={TestFade}
        options={{cardStyleInterpolator: forFadeTest}}
      />

      <Stack.Screen
        name="TestConfig"
        component={TestConfig}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />

      <Stack.Screen
        name="TestHeaderInterpolator"
        component={TestHeaderInterpolator}
        options={{
          title: 'Test Header Interpolator',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />

      <Stack.Screen
        name="TestCardInterpolator"
        component={TestCardInterpolator}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
      independent={true} // dismiss warning, only 1 navigation container allowed at root of app
    >
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  paragraph: {
    padding: 15,
    fontSize: 20,
  },
});

// https://reactnavigation.org/docs/stack-navigator
