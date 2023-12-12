import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, Feather,FontAwesome,FontAwesome5 } from '@expo/vector-icons';

import { useNavigation,useRouter  } from "expo-router";

const Header = ({ title }) => {
    
 const router=useRouter()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <FontAwesome5 name='arrow-left' size={20} />  
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
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
    width:'100%',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    height:59,
    paddingHorizontal:20,
    borderBottomWidth:1,
    borderColor:'#ccc'
    
   

  },
 
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default Header;
