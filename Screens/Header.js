import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Header</Text>

      <Image
        style={styles.image}
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
  image: {
    width: 30,
    height: 30,
  },
});

export default Header;
