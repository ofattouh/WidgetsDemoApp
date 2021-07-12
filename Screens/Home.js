import * as React from 'react';
import {StyleSheet, StatusBar, Button, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Link} from '@react-navigation/native';

function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.paragraph}>Home Screen</Text>
      <Text>{'\n'}</Text>

      <Link to="/Profile">Profile Link</Link>
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
        title="Go to Widgets"
        onPress={() => navigation.navigate('Widgets')}
      />
      <Text>{'\n'}</Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://picsum.photos/500/500.jpg?random=' + Math.random(),
        }}
      />
      <Text>{'\n'}</Text>
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
