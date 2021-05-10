import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Main screen</Text>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </View>
  );
}

function ModalScreen({navigation}) {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.paragraphModal}>Modal content</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const MainStack = createStackNavigator();

function MyModal() {
  return (
    <MainStack.Navigator mode="modal" headerMode="none">
      <MainStack.Screen name="main" component={MainScreen} />
      <MainStack.Screen name="MyModal" component={ModalScreen} />
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  paragraph: {
    paddingBottom: 45,
    fontSize: 30,
  },
  paragraphModal: {
    padding: 45,
    fontSize: 30,
    color: '#fff',
  },
});

export default MyModal;
