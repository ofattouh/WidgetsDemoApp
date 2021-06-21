import * as React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
// import * as Analytics from 'expo-firebase-analytics';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home Screen</Text>
      <Button
        title="Go to Analytics"
        onPress={() => navigation.navigate('AnalyticsScreen')}
      />
    </View>
  );
}

function AnalyticsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Analytics Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function MyAnalytics() {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <View style={styles.container2}>
      <NavigationContainer
        independent={true} // warning, only 1 navigation container is allowed at root of app
        ref={navigationRef}
        /* documentTitle={{
          // customize page title text only on web
          formatter: (options, route) =>
            `${options?.title ?? route?.name} - My Muslim Pro App`,
        }} */
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          // returns the options for the currently focused screen
          // const options = navigationRef.current.getCurrentOptions();

          if (previousRouteName !== currentRouteName) {
            // The line below uses the expo-firebase-analytics tracker
            // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
            // Change this line to use another Mobile analytics SDK

            // Analytics.setCurrentScreen(currentRouteName, currentRouteName);
            /* await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName
          }); */

            alert(`The route is changed to ${currentRouteName}`);
          }

          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
        }}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <Button
        onPress={() =>
          navigationRef.current &&
          navigationRef.current.navigate('AnalyticsScreen')
        }
        title="Go to Analytics 2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
  },
  paragraph: {
    padding: 25,
    fontSize: 20,
  },
});

// npm install --save @react-native-firebase/app
// https://rnfirebase.io/
// https://firebase.google.com/docs/analytics/
// https://docs.expo.io/versions/latest/sdk/firebase-analytics/
// https://reactnavigation.org/docs/navigation-container/
