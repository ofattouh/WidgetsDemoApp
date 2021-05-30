import * as React from 'react';
import {Alert, View, TextInput, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.buttons}>
      <Button
        title="Edit Text Input"
        onPress={() => navigation.push('EditText')}
        mode="contained"
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
    <View style={styles.content}>
      <TextInput
        autoFocus
        style={styles.input}
        value={text}
        placeholder="Type anything…"
        onChangeText={setText}
      />
    </View>
  );
};

const Stack = createStackNavigator();

function DisableBackBtn() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EditText" component={EditTextScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 40,
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
});

export default DisableBackBtn;
