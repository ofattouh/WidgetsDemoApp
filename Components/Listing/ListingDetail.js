import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const ListingDetail = ({item}) => (
  <View style={styles.footer}>
    <Image style={styles.Thumbnail} source={{uri: item.thumbnail}} />

    <View style={styles.details}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  listingDetailWrapper: {
    flex: 1,
  },
  details: {
    position: 'absolute',
    top: 0,
    padding: '5%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 255, 0.1)',
  },
  title: {
    width: '99%',
    fontSize: 30,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
  },
  Thumbnail: {
    width: '100%',
    height: 50,
  },
});

export default ListingDetail;
