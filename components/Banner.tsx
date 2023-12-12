import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Banner = ({ imageSource, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignSelf:'center',
    width:'90%',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    marginVertical:15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,

  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Banner;
