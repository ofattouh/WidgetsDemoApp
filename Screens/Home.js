import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListingItem from '../Components/Listing/ListingItem';

// Home route component
const Home = ({navigation}) => {
  const [data, setData] = React.useState([]);

  const fetchAPI = async () => {
    try {
      const res = await fetch(
        'https://my-json-server.typicode.com/PacktPublishing/React-Projects/listings',
      );
      const dataJSON = await res.json();

      if (dataJSON) {
        setData(dataJSON);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchAPI();
  }, []);

  // specify String key prop (unique) for each iterated component using keyExtractor
  return (
    <View style={styles.ListingsWrapper}>
      <FlatList
        style={styles.Listings}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={item => <ListingItem item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ListingsWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Listings: {
    width: 100,
    padding: '2%',
  },
});

export default Home;
