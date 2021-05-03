import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ListingItem = ({item, navigation}) => (
  <TouchableOpacity
    style={styles.ListingItemWrapper}
    onPress={() => navigation.navigate('Detail', {item})}>
    <Image style={styles.Thumbnail} source={{uri: item.thumbnail}} />

    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ListingItemWrapper: {
    padding: 2,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  Thumbnail: {
    marginRight: 4,
    height: 200,
    width: 200,
  },
});

export default ListingItem;
