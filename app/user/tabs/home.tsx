import { StyleSheet, Text, View, TextInput, Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/selectors";
import { User } from "../../../interfaces";

import { AntDesign, Ionicons, Feather,FontAwesome } from '@expo/vector-icons';
import Colors from "../../../constants/Colors";
import Banner from "../../../components/Banner";
import { ScrollView } from "react-native-gesture-handler";
import SeeAll from "../../../components/SeeAll";

import { useNavigation,useRouter } from "expo-router";

const numColumns = 4;
const screenWidth = Dimensions.get('window').width;
const dashboard = () => {
 
  const navigation = useNavigation();
  const router = useRouter();
  const [selectfi, setSelectFi] = useState('All')
  const user: User = useSelector(getUser);
  const categoriesData = [
    { id: '1', title: 'Eletrician', image: 'https://picsum.photos/300/200/?random' },
    { id: '2', title: 'Plumber', image: 'https://picsum.photos/300/200/?random' },
    { id: '3', title: 'Clenning', image: 'https://picsum.photos/300/200/?random' },
    { id: '4', title: 'Reparing', image: 'https://picsum.photos/300/200/?random' },
    { id: '5', title: 'Laundry', image: 'https://picsum.photos/300/200/?random' },
    { id: '6', title: 'Painting', image: 'https://picsum.photos/300/200/?random' },
    { id: '7', title: 'Shifting', image: 'https://picsum.photos/300/200/?random' },
    { id: '8', title: 'More', image: 'https://picsum.photos/300/200/?random' },




    // Add more categories as needed
  ];
  const data = [
    { id: '1', name: 'Kylee Danforf', title: 'Washing Clothes', image: 'https://picsum.photos/300/200/?random' },
    { id: '2', name: 'Noke Danforf', title: 'Plumber thin', image: 'https://picsum.photos/300/200/?random' },
    { id: '3', name: 'Fazee Danforf', title: 'House Clenning', image: 'https://picsum.photos/300/200/?random' },
    { id: '4', name: 'Narun Danforf', title: 'Reparing things', image: 'https://picsum.photos/300/200/?random' },
    { id: '5', name: 'Alek Danforf', title: 'Bathroom Cleanning', image: 'https://picsum.photos/300/200/?random' },





    // Add more categories as needed
  ];


  const categoriesall = [
    { id: '0', title: 'All' },
    { id: '1', title: 'Eletrician' },
    { id: '2', title: 'Plumber' },
    { id: '3', title: 'Clenning' },
    { id: '4', title: 'Reparing' },
    { id: '5', title: 'Laundry' },
    { id: '6', title: 'Painting' },
    { id: '7', title: 'Shifting' },
    { id: '8', title: 'More' },




    // Add more categories as needed
  ];
  const handleProfilePress = () => {
    // Handle profile icon press
    // For example, navigate to profile screen
  };

  const handleFavPress = () => {
    router.push("user/bookmark")
    // Handle notification icon press
    // For example, show notifications screen
  };

  const handleNotificationPress = () => {
    router.push("user/notification")
    
    // Handle notification icon press
    // For example, show notifications screen
  };
  const handleBannerPress = () => {
    // Handle banner press action
    console.log('Banner pressed!');
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfilePress} style={styles.profileIcon}>

          <Ionicons name="person-circle-outline" size={40} color="#333" />
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>
          <Text>Good morning <Feather name='sun' size={13} color={Colors.primary} /> </Text>
          <Text style={{ fontWeight: 'bold' }}>Jone Deo</Text>
        </View>


        <TouchableOpacity onPress={handleNotificationPress} style={styles.notificationIcon}>

          <Ionicons name="notifications-outline" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFavPress} style={styles.favicon}>

          <Ionicons name="heart-outline" size={30} color="#333" />
        </TouchableOpacity>


      </View>
      <ScrollView>

        {/* search bar */}
        <View style={styles.container}>
          <Ionicons name="ios-search" size={24} color={'#ddd'} style={styles.icon} />
          <TextInput
            placeholder="Search..."
            style={styles.input}

          />
          <Feather name="git-pull-request" size={24} color={Colors.primary} style={styles.icon} />

        </View>
        {/* search bar */}
        {/* banner */}

        <Banner
          imageSource={require('../../../assets/images/abc.jpg')}
          title="Welcome to Our App"
          onPress={handleBannerPress}
        />
        {/*end banner */}

        {/* category list */}
        <SeeAll title='Service' onPress={'user/allservices'} />
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
          columnWrapperStyle={styles.list}
        />
        <SeeAll title='Most Popular Services' />
        <View style={{ width: '93%', alignSelf: 'center' }}>
          <FlatList
            horizontal

            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            data={categoriesall}
            renderItem={({ item }) => (
              selectfi == item.title ? <TouchableOpacity onPress={() => {
                setSelectFi(item.title)
              }} style={{ margin: 8, borderRadius: 15, margin: 8, borderColor: Colors.primary, borderWidth: 1.5, paddingVertical: 5, paddingHorizontal: 15, backgroundColor: Colors.primary }}>

                <Text style={{ color: '#fff', fontSize: 16 }}>{item.title}</Text>
              </TouchableOpacity>

                :
                <TouchableOpacity onPress={() => {
                  setSelectFi(item.title)
                }} style={{ margin: 8, borderRadius: 15, margin: 8, borderColor: Colors.primary, borderWidth: 1.5, paddingVertical: 5, paddingHorizontal: 15 }}>

                  <Text style={{ color: Colors.primary, fontSize: 16 }}>{item.title}</Text>
                </TouchableOpacity>


            )
            }
            keyExtractor={(item) => item.id}

          />
        </View>
        <FlatList
          contentContainerStyle={{ borderBottomWidth: 1, borderColor: '#ddd', paddingBottom: 20, marginBottom: 10 }}
          data={data}
          renderItem={({ item }) => (
            <View style={{ width: '90%', flexDirection: 'row', alignSelf: 'center', margin: 7, backgroundColor: '#fff', padding: 10, elevation: 5, borderRadius: 10 }}>
              <Image source={{ uri: item.image }} style={{ height: 120, width: 120, borderRadius: 15 }} />
              <View style={{ marginLeft: 10, justifyContent: 'space-around' }}>
                <Text style={{ color: '#999', }}>{item.name}</Text>
                <Text style={{ color: '#555', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
                <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 18 }}>$ 50</Text>
                <Text style={{fontSize:12}}><FontAwesome name='star-half-empty' size={15} color={'orange'} /> 4.7 | 6,186 reviews </Text>

              </View>

              <TouchableOpacity onPress={handleNotificationPress} style={{position:'absolute',top:12,right:15}}>

                <Ionicons name="heart-outline" size={30} color={Colors.primary} />
              </TouchableOpacity>
            </View>
          )
          }
          keyExtractor={(item) => item.id}

        />


        {/* end category list */}
      </ScrollView>
    </View>
  );
};

export default dashboard;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
    backgroundColor: '#eee'

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
  header: {
    height: 59, alignItems: 'center', width: '100%', flexDirection: 'row', paddingHorizontal: 20,

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileIcon: {

    // Pushes the profile icon to the left
  },
  notificationIcon: {
    position: 'absolute', right: '18%'
    // Pushes the notification icon to the right
  },
  favicon: {
    position: 'absolute', right: '5%'
    // Pushes the notification icon to the right
  },
});
