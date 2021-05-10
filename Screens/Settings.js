import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

function Settings({route, navigation}) {
  const {itemId, otherParam, itemId2} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Settings Screen</Text>
      <Text style={styles.paragraph}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={styles.paragraph}>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text style={styles.paragraph}>initialParams: {JSON.stringify(itemId2)}</Text>

      <Button
        title="Go to Settings... again"
        onPress={() =>
          navigation.push('Settings', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> 
      <Text>{"\n"}</Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Text>{"\n"}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      
      <Text>{"\n"}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
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
    fontSize: 17,
  },
});

export default Settings;
