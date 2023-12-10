import { StyleSheet, Text, View, TextInput, Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/selectors";
import { User } from "../../../interfaces";

import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from "../../../constants/Colors";


const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const dashboard = () => {
  const user: User = useSelector(getUser);
  const categoriesData = [
    { id: '1', title: 'Eletrician', image: 'https://picsum.photos/300/200/?random' },
    { id: '2', title: 'Plumber', image: 'https://picsum.photos/300/200/?random' },
    { id: '3', title: 'Clenning', image: 'https://picsum.photos/300/200/?random' },
    { id: '4', title: 'Category 4', image: 'https://picsum.photos/300/200/?random' },
    { id: '5', title: 'Category 5', image: 'https://picsum.photos/300/200/?random' },
    { id: '6', title: 'Category 6', image: 'https://picsum.photos/300/200/?random' },


    // Add more categories as needed
  ];
  const handleProfilePress = () => {
    // Handle profile icon press
    // For example, navigate to profile screen
  };

  const handleNotificationPress = () => {
    // Handle notification icon press
    // For example, show notifications screen
  };



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfilePress} style={styles.profileIcon}>

          <Ionicons name="person-circle-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity onPress={handleNotificationPress} style={styles.notificationIcon}>

          <Ionicons name="notifications-outline" size={30} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Ionicons name="ios-search" size={24} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Search..."
          style={styles.input}

        />
      </View>

      <FlatList
        contentContainerStyle={{ marginHorizontal: 5 }}
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
        columnWrapperStyle={styles.list}
      />
    </View>
  );
};

export default dashboard;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.light,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height:50
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    // Additional styles for the input can be added here
  },
  list: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: screenWidth / numColumns - 20, // Adjust height according to your need
    borderWidth: 1,
    borderColor: '#ddd', // Add your desired border color
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9', // Add your desired background color
  },
  itemImage: {
    width: '80%',
    height: 60, // Adjust image height as needed
    resizeMode: 'contain',
    borderRadius: 10
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Add your desired text color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileIcon: {
    marginRight: 'auto', // Pushes the profile icon to the left
  },
  notificationIcon: {
    marginLeft: 'auto', // Pushes the notification icon to the right
  },
});
