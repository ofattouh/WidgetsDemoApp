import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useIsDrawerOpen,
} from '@react-navigation/drawer';

function FeedScreen({navigation}) {
  const isDrawerOpen = useIsDrawerOpen(); // Hook

  return (
    <View style={styles.container}>
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
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
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
    padding: 15,
    fontSize: 20,
  },
});

export default MyDrawer;
