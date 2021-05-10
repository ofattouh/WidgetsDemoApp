import * as React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Header</Text>

      <Image
        style={{width: 30, height: 30}}
        source={{uri: 'https://picsum.photos/30/30.jpg'}}
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
  paragraph: {
    padding: 15,
    fontSize: 17,
  },
});

export default Header;
