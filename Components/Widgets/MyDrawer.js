import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  useWindowDimensions,
  Linking,
} from 'react-native';
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
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://example.com')}
        activeBackgroundColor="#efe"
        inactiveBackgroundColor="#c6cb"
        activeTintColor="#efe"
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerType={isLargeScreen ? 'permanent' : 'front'}
      drawerStyle={
        isLargeScreen
          ? {width: '50%', backgroundColor: '#c6cb43'}
          : {width: '70%', backgroundColor: '#c6cb43'}
      }
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 10},
      }}
      // hideStatusBar="true"
      // overlayColor="transparent"
    >
      <Drawer.Screen
        name="Feed"
        component={FeedScreen}
        options={{drawerLabel: 'My Feed'}}
      />
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
