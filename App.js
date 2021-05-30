/**
 * Muslim Prayer Companion App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './Screens/Header';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import Widgets from './Screens/Widgets';

import MyFlatList from './Components/Widgets/MyFlatList';
import MyModal from './Components/Widgets/MyModal';
import MyTabs from './Components/Widgets/MyTabs';
import MyDrawer from './Components/Widgets/MyDrawer';
import MyStatusBar from './Components/Widgets/MyStatusBar';
import DisableBackBtn from './Components/Widgets/DisableBackBtn';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
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
            component={Home}
            options={{
              headerTitle: props => <Header {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => alert('Clicked!')}
                  title="Click me"
                  color="#2A52BE"
                />
              ),
            }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            // options={{headerShown: false}}
            options={({route}) => ({title: route.params.name})}
            initialParams={{itemId2: 42}}
          />

          <Stack.Screen
            name="Widgets"
            component={Widgets}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />

          <Stack.Screen
            name="MyFlatList"
            component={MyFlatList}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />

          <Stack.Screen
            name="MyModal"
            component={MyModal}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />

          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />

          <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />

          <Stack.Screen
            name="MyStatusBar"
            component={MyStatusBar}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />

          <Stack.Screen
            name="DisableBackBtn"
            component={DisableBackBtn}
            options={({}) => ({
              headerTitle: props => <Header {...props} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

// npx react-native init MyApp
// cd ios // pod install OR npx pod-install ios
// https://reactnavigation.org/docs/navigation-prop/
// https://github.com/vonovak/react-navigation-header-buttons
// https://github.com/oblador/react-native-vector-icons
