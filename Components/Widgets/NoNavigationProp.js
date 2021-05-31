import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Not passing in navigation prop explicitly, navigate using useNavigation hook
function GoToButtonUsingHook({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

// Not passing navigation prop
function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home screen (No navigation prop)</Text>
      <GoToButtonUsingHook screenName="Details" />
    </View>
  );
}

// Not passing navigation prop
function DetailsScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Details Screen (No navigation prop)</Text>
      <GoToButtonUsingHook screenName="Home" />
    </View>
  );
}

const Stack = createStackNavigator();

function NoNavigationProp() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
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
    padding: 25,
    fontSize: 20,
  },
});

export default NoNavigationProp;
