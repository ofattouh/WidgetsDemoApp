import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function Widgets({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>My Widgets</Text>

      <Button
        title="My Status Bar"
        onPress={() => navigation.navigate('MyStatusBar')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="My FlatList"
        onPress={() => navigation.navigate('MyFlatList')}
      />
      <Text>{'\n'}</Text>

      <Button title="My Modal" onPress={() => navigation.navigate('MyModal')} />
      <Text>{'\n'}</Text>

      <Button
        title="My Drawer"
        onPress={() => navigation.navigate('MyDrawer')}
      />
      <Text>{'\n'}</Text>

      <Button title="My Tabs" onPress={() => navigation.navigate('MyTabs')} />
      <Text>{'\n'}</Text>

      <Button
        title="Disable Back Button/Focused Screen"
        onPress={() => navigation.navigate('DisableBackBtnAndFocused')}
      />
      <Text>{'\n'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
  },
  paragraph: {
    padding: 15,
    fontSize: 20,
  },
});

export default Widgets;
