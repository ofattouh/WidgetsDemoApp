import * as React from 'react';
import {Alert, View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.buttons}>
      <Button
        title="Disable Back Button"
        onPress={() => navigation.push('EditText')}
        mode="contained"
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Focus Screen"
        onPress={() => navigation.navigate('FocusScreen')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Focus Screen 2"
        onPress={() => navigation.navigate('FocusScreen2')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Focus Screen 3"
        onPress={() => navigation.navigate('FocusScreen3')}
      />
    </View>
  );
};

const EditTextScreen = ({navigation}) => {
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        if (!hasUnsavedChanges) {
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure you want to discard them and leave the screen?',
          [
            {text: 'Keep changes', style: 'cancel', onPress: () => {}},
            {
              text: 'Discard',
              style: 'destructive',
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
        );
      }),
    [hasUnsavedChanges, navigation],
  );

  return (
    <View>
      <TextInput
        autoFocus
        style={[styles.input, styles.TextInput]}
        value={text}
        placeholder="Type anything…"
        onChangeText={setText}
      />
    </View>
  );
};

// Not recommended
const FocusScreen = ({navigation}) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      alert('Screen is focused. Adding listener manually!');
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.content}>
      <Text style={styles.paragraph}>Focus Screen (not recommended)</Text>
    </View>
  );
};

// recommended
function FocusScreen2() {
  useFocusEffect(
    React.useCallback(() => {
      alert('Screen was focused. Using useFocusEffect hook!');
      // Do something when the screen is focused
      return () => {
        alert('Screen was unfocused. Using useFocusEffect hook!');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  return (
    <View style={styles.content}>
      <Text style={styles.paragraph}>Focus Screen 2 (recommended method)</Text>
    </View>
  );
}

// useIsFocused hook will cause component to re-render when focus and unfocus screen
// may introduce unnecessary component re-renders as screen comes in and out of focus
function FocusScreen3() {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();

  return (
    <View style={styles.content}>
      <Text style={styles.paragraph}>Will re-render screen when un/focus</Text>

      <Text style={styles.paragraph}>
        Screen is {isFocused ? 'focused' : 'unfocused'}
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function DisableBackBtnAndFocused() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EditText" component={EditTextScreen} />
      <Stack.Screen name="FocusScreen" component={FocusScreen} />
      <Stack.Screen name="FocusScreen2" component={FocusScreen2} />
      <Stack.Screen name="FocusScreen3" component={FocusScreen3} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    marginTop: 50,
    padding: 10,
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: '#fff',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    padding: 15,
    fontSize: 20,
  },
});

export default DisableBackBtnAndFocused;
