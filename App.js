/**
 * Muslim Prayer Companion App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeHeaderSection() {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{width: 30, height: 30}}
        source={{uri: 'https://picsum.photos/30/30.jpg'}}
      />
    </View>
  );
}

function ProfileHeaderSection() {
  return (
    <View style={{flex: 1}}>
      <Text>Profile</Text>

      <Image
        style={{width: 30, height: 30}}
        source={{uri: 'https://picsum.photos/30/30.jpg'}}
      />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <Button
        title="Go to My Details"
        onPress={() => {
          navigation.navigate('My Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />

      <Image
        style={{width: 300, height: 300}}
        source={{uri: 'https://picsum.photos/300/300.jpg'}}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {itemId, otherParam, itemId2} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>My Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>initialParams: {JSON.stringify(itemId2)}</Text>

      <Button
        title="Go to My Details... again"
        onPress={() =>
          navigation.push('My Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ProfileScreen({navigation}) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return <Text>Count: {count}</Text>;
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Arial',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => <HomeHeaderSection {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Button"
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name="My Details"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.name})}
          initialParams={{itemId2: 42}}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({}) => ({
            headerTitle: props => <ProfileHeaderSection {...props} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// npx react-native init MyApp
// cd ios // pod install OR npx pod-install ios
// https://reactnavigation.org/docs/navigation-prop/
// https://github.com/vonovak/react-navigation-header-buttons
// https://github.com/oblador/react-native-vector-icons
// https://reactnative.dev/docs/flatlist
// https://reactnative.dev/docs/sectionlist (sectioned)
// https://reactnative.dev/docs/virtualizedlist (mutable data instead of plain arrays)
// https://reactnativeelements.com/docs/listitem/ (contacts with avatar)
// https://reactnativeelements.com/docs/searchbar/
// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
