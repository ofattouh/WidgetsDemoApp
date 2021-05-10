import * as React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home Screen</Text>
      <Text>{"\n"}</Text>

      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate('Settings', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />

      <Text>{"\n"}</Text>

      <Button title="Go to FlatList" onPress={() => navigation.navigate('MyFlatList')} />

      <Text>{"\n"}</Text>

      <Button title="Go to Modal" onPress={() => navigation.navigate('MyModal')} />

      <Text>{"\n"}</Text>

      <Image
        style={{width: 300, height: 300}}
        source={{uri: 'https://picsum.photos/300/300.jpg?random=' + Math.random()}}
      />
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

export default Home;
