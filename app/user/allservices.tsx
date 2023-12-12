import React from 'react';
import { View, Text, StyleSheet, FlatList,Image,Dimensions } from 'react-native';
import Header from '../../components/Header';
import { useRouter } from 'expo-router';

const numColumns = 4;
const screenWidth = Dimensions.get('window').width;
const AllServices = () => {
    const router = useRouter();
    
    const categoriesData = [
        { id: '1', title: 'Eletrician', image: 'https://picsum.photos/300/200/?random' },
        { id: '2', title: 'Plumber', image: 'https://picsum.photos/300/200/?random' },
        { id: '3', title: 'Clenning', image: 'https://picsum.photos/300/200/?random' },
        { id: '4', title: 'Reparing', image: 'https://picsum.photos/300/200/?random' },
        { id: '5', title: 'Laundry', image: 'https://picsum.photos/300/200/?random' },
        { id: '6', title: 'Painting', image: 'https://picsum.photos/300/200/?random' },
        { id: '7', title: 'Shifting', image: 'https://picsum.photos/300/200/?random' },
        { id: '8', title: 'More', image: 'https://picsum.photos/300/200/?random' },
        { id: '9', title: 'More', image: 'https://picsum.photos/300/200/?random' },
        { id: '10', title: 'More', image: 'https://picsum.photos/300/200/?random' },
        { id: '11', title: 'More', image: 'https://picsum.photos/300/200/?random' },
        { id: '12', title: 'More', image: 'https://picsum.photos/300/200/?random' },
    
    
    
    
        // Add more categories as needed
      ];
 

  return (
    <View style={styles.container}>
        <Header
         title={'All Services '}
      
         />
        <FlatList
          contentContainerStyle={{ borderBottomWidth: 1, borderColor: '#ddd', paddingBottom: 20, marginBottom: 10 }}
          data={categoriesData}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          )
          }
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop: 20,
    height: screenWidth / numColumns - 20, // Adjust height according to your need


    // Add your desired background color
  },
  itemImage: {
    width: 60,
    height: 60, // Adjust image height as needed
    resizeMode: 'contain',
    borderRadius: 30
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Add your desired text color
  },
  
});

export default AllServices;
