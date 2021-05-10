import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Item #1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Item #2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Item #3',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
    title: 'Item #4',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
    title: 'Item #5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Item #6',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MyFlatList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <Text>Footer</Text>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ecf0f1',
  },
  item: {
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    height: 150,
  },
  title: {
    fontSize: 15,
  },
  separator: {
    height: 1,
    width: '95%',
    backgroundColor: '#CED0CE',
    marginLeft: '2%',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#CED0CE',
    backgroundColor: '#CECE',
    padding: 10,
    height: 70,
  },
  header: {
    backgroundColor: '#CECE',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    height: 150,
  },
});

export default MyFlatList;

// npx react-native init MuslimPrayerCompanion
// npm install react-navigation react-navigation-stack react-navigation-tabs
// npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// cd ios // pod install
// https://reactnative.dev/docs/flatlist
// https://reactnative.dev/docs/sectionlist (sectioned)
// https://reactnative.dev/docs/virtualizedlist (mutable data instead of plain arrays)
// https://reactnativeelements.com/docs/listitem/ (contacts with avatar)
// https://reactnativeelements.com/docs/searchbar/
// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
