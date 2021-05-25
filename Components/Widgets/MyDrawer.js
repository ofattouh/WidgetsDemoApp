import * as React from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useIsDrawerOpen,
} from '@react-navigation/drawer';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

// use FocusAwareStatusBar instead of StatusBar from React Native to work for drawer
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

function FeedScreen({navigation}) {
  const isDrawerOpen = useIsDrawerOpen(); // Hook

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <Text style={styles.paragraph}>
        Feed Screen {isDrawerOpen ? 'is opened' : 'is closed'}
      </Text>
      <Text>{'\n'}</Text>

      <Button title="Open my drawer" onPress={() => navigation.openDrawer()} />
      <Text>{'\n'}</Text>

      <Button
        title="Toggle my drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text style={styles.paragraph}>Notifications Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close The Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle The Drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
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
    padding: 25,
    fontSize: 20,
  },
});

export default MyDrawer;
