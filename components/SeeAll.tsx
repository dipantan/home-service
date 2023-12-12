import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { useRouter } from 'expo-router';

const SeeAll = ({  title,onPress }) => {
  const router= useRouter()

  return (
    <View style={{width:'90%',justifyContent:'space-between',alignItems:'center',alignSelf:'center',flexDirection:'row',marginVertical:7}}>
      <Text style={{fontSize:17,fontWeight:'bold'}}>{title}</Text>
      <Text onPress={()=>
    router.push(onPress)
    } style={{color:Colors.primary,fontWeight:'bold',fontSize:17}}>See All</Text>
    </View>
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

export default SeeAll;
