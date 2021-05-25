import * as React from 'react';
import {Text, StatusBar, Button, StyleSheet, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function Screen1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={styles.paragraph}>Screen 1</Text>

      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}
        color="#ecf"
      />
    </SafeAreaView>
  );
}

function Screen2({navigation}) {
  return (
    <SafeAreaView style={[styles.container, styles.container2]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffbf00" />
      <Text style={styles.paragraph}>Screen 2</Text>

      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function MyStatusBar() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6699CC',
  },
  container2: {
    backgroundColor: '#ecf',
  },
  paragraph: {
    color: '#fff',
    padding: 25,
    fontSize: 20,
  },
});
