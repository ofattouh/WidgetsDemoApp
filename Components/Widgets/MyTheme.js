import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

/* My Custom theme
const MyThemeObj2 = {
  dark: false,
  colors: {
    primary: 'rgb(0, 255, 128)', // used for brand color
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
*/

const MyThemeObj = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors, // append
    primary: 'rgb(255, 45, 85)', //replace
    text: 'rgb(0, 255, 128)',
    // card: 'rgb(22, 22, 242)',
  },
};

// useTheme hook returns theme colors object
function useThemeButtonScreen() {
  const {colors} = useTheme();

  return (
    <TouchableOpacity style={{backgroundColor: colors.card}}>
      <Text style={{color: colors.text}}>
        useTheme hook returns theme colors object
      </Text>
    </TouchableOpacity>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen({route, navigation}) {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Settings Screen</Text>
      <Text style={styles.paragraph}>userParams: {JSON.stringify(user)}</Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home Screen</Text>

      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: {user: 'jane'},
          })
        }
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function MyTheme() {
  // useColorScheme hook subscribes to color scheme updates from react native Appearance module
  // for detecting operating system color scheme user preferences
  const colorScheme = useColorScheme();

  // console.log('\n\nMyThemeObj');
  // console.log(MyThemeObj);
  // console.log('\n\nDefaultTheme');
  // console.log(DefaultTheme);
  // console.log('\n\nDarkTheme');
  // console.log(DarkTheme);
  // console.log('\n\nMyThemeObj2');
  // console.log(MyThemeObj2);
  // console.log('\n\nuseColorScheme');
  // console.log(colorScheme);

  return (
    <NavigationContainer
      independent={true} // warning, only 1 navigation container is allowed at root of app
      // theme={MyThemeObj} // DefaultTheme will be used if no theme prop was provided
      theme={colorScheme === 'dark' ? DarkTheme : MyThemeObj}>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Root" component={Root} />
        <Drawer.Screen
          name="useThemeButtonScreen"
          component={useThemeButtonScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    padding: 25,
    fontSize: 20,
  },
});

// https://reactnavigation.org/docs/themes
