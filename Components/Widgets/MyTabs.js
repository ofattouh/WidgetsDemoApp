import * as React from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

// use FocusAwareStatusBar instead of StatusBar from React Native to work for tabs
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

function FeedScreen({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      // e.preventDefault();

      alert('Your have 3 followers (tabPress)!');
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabLongPress', e => {
      alert('Your have 3 followers (tabLongPress)!');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text>Feed Screen</Text>
    </SafeAreaView>
  );
}

function PrayersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text>Prayers Screen</Text>
    </SafeAreaView>
  );
}

function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text>Community Screen</Text>
    </SafeAreaView>
  );
}

function DetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text style={styles.paragraph}>Home Screen</Text>
      <Text>{'\n'}</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text style={styles.paragraph}>Settings Screen</Text>
      <Text>{'\n'}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text>{'\n'}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Text>{'\n'}</Text>

      <Button
        title="Go to profile"
        onPress={() => navigation.jumpTo('Profile', {owner: 'Micha??'})}
      />
    </SafeAreaView>
  );
}

function ProfileScreen({route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Profile Screen</Text>
      <Text style={styles.paragraph}>
        {route?.params?.owner ? `${route.params.owner}'s Profile` : ''}
      </Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator initialRouteName="Settings" headerMode="none">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs({}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // tabBar={() => null}
      screenOptions={({route}) => ({
        // headerTitle: 'My Tabs',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Prayers') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'earth' : 'earth-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Any other component: https://ionic.io/ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6699CC',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{tabBarLabel: 'My Home'}}
      />

      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{tabBarBadge: 3}}
      />

      <Tab.Screen name="Prayers" component={PrayersScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />

      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{tabBarLabel: 'My Settings'}}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'My Profile'}}
      />
    </Tab.Navigator>
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
    fontSize: 25,
  },
});

export default MyTabs;

// https://reactnavigation.org/docs/route-prop
// https://reactnavigation.org/docs/bottom-tab-navigator
