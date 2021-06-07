import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MyFlatList from '../Components/Widgets/MyFlatList';
import MyModal from '../Components/Widgets/MyModal';
import MyTabs from '../Components/Widgets/MyTabs';
import MyDrawer from '../Components/Widgets/MyDrawer';
import MyStatusBar from '../Components/Widgets/MyStatusBar';
import DisableBackBtnAndFocused from '../Components/Widgets/DisableBackBtnAndFocused';
import NoNavigationProp from '../Components/Widgets/NoNavigationProp';
import MyTheme from '../Components/Widgets/MyTheme';
import MyAnalytics from '../Components/MyAnalytics';

function GoToButton({navigation, screenName}) {
  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

function HomeScreen({navigation}) {
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

      <GoToButton navigation={navigation} screenName="NoNavigationProp" />
      <Text>{'\n'}</Text>

      <Button title="My Theme" onPress={() => navigation.navigate('MyTheme')} />
      <Text>{'\n'}</Text>

      <Button
        title="My Analytics"
        onPress={() => navigation.navigate('MyAnalytics')}
      />
      <Text>{'\n'}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Widgets() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyFlatList" component={MyFlatList} />
      <Stack.Screen name="MyModal" component={MyModal} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen name="MyStatusBar" component={MyStatusBar} />
      <Stack.Screen name="NoNavigationProp" component={NoNavigationProp} />
      <Stack.Screen
        name="DisableBackBtnAndFocused"
        component={DisableBackBtnAndFocused}
      />
      <Stack.Screen name="MyTheme" component={MyTheme} />
      <Stack.Screen name="MyAnalytics" component={MyAnalytics} />
    </Stack.Navigator>
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
