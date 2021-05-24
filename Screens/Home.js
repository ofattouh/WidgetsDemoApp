import * as React from 'react';
import {StyleSheet, Button, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Home Screen</Text>
      <Text>{'\n'}</Text>

      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate('Settings', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to FlatList"
        onPress={() => navigation.navigate('MyFlatList')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('MyModal')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Tabs"
        onPress={() => navigation.navigate('MyTabs')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Drawer"
        onPress={() => navigation.navigate('MyDrawer')}
      />
      <Text>{'\n'}</Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://picsum.photos/500/500.jpg?random=' + Math.random(),
        }}
      />
    </SafeAreaView>
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
  image: {
    width: 350,
    height: 250,
  },
});

export default Home;
