import { StyleSheet, View, Text, ScrollView, TouchableOpacity,FlatList,Image } from 'react-native'
import React,{useState} from 'react'
import { Ionicons,MaterialCommunityIcons,FontAwesome,Feather,AntDesign } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import Colors from '../../../constants/Colors';

const orders = () => {
  const router=useRouter();
  const data = [
      { id: '1', status: 'Upcoming', title: 'Washing Clothes', image: 'https://picsum.photos/300/200/?random' },
      { id: '2', status: 'Confirm', title: 'Plumber thin', image: 'https://picsum.photos/300/200/?random' },
      { id: '3', status: 'Cancel', title: 'House Clenning', image: 'https://picsum.photos/300/200/?random' },
      { id: '4', status: 'Confirm', title: 'Reparing things', image: 'https://picsum.photos/300/200/?random' },
      { id: '5', status: 'Cancel', title: 'Bathroom Cleanning', image: 'https://picsum.photos/300/200/?random' },
      // Add more categories as needed
  ];
  const [activeTab, setActiveTab] = useState('Upcoming'); // State to track active tab

  // Dummy data for bookings with different statuses
  const bookings = [
    { id: 1, status: 'Upcoming', name: 'Booking 1' },
    { id: 2, status: 'Complete', name: 'Booking 2' },
    { id: 3, status: 'Cancel', name: 'Booking 3' },
    // Add more bookings with various statuses
  ];

  const renderTab = (tabName) => (
    <TouchableOpacity
      style={[styles.tab, activeTab === tabName && styles.activeTab]}
      onPress={() => setActiveTab(tabName)}
    >
      <Text style={activeTab === tabName ? styles.activeTabText : styles.tabText}>{tabName}</Text>
    </TouchableOpacity>
  );

  const renderBookings = ({ item }) => (
    <View style={styles.bookingItem}>
      <Text>{item.name}</Text>
      {/* Display other booking details here */}
    </View>
  );
  

  const bookingData = [
    {
      id: 'ABC123',
      serviceName: 'Service A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Confirmed',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 'DEF456',
      serviceName: 'Service B',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Pending',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more booking data as needed
  ];
  
 
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
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.header}>
        <TouchableOpacity  style={styles.profileIcon}>

          <Ionicons name="logo-electron" size={30} color={Colors.primary} />
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>

          <Text style={{ fontWeight: 'bold',fontSize:20,color:'#555' }}>My Bookings</Text>
        </View>


        <TouchableOpacity onPress={handleNotificationPress} style={styles.search}>

          <Ionicons name="search" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFavPress} style={styles.favicon}>

          <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={30} color="#333" />
        </TouchableOpacity>


      </View>
      <View style={styles.container1}>
      <View style={styles.tabs}>
        {renderTab('Upcoming')}
        {renderTab('Complete')}
        {renderTab('Cancel')}
      </View>
      
    </View>
    <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ borderBottomWidth: 1, borderColor: '#ddd', paddingBottom: 20, marginBottom: 10 }}
                data={data}
                renderItem={({ item }) => (
                  <View style={{ width: '92%', margin: 7, backgroundColor: '#fff', padding: 10, elevation: 5, borderRadius: 10,alignSelf:'center' }}>
                    <View style={{ width: '92%', flexDirection: 'row', alignSelf: 'center', }}>
                        <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderRadius: 15 }} />
                        <View style={{ marginLeft: 10, justifyContent: 'space-around' }}>
                            
                            <Text style={{ color: '#555', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
                            <Text style={{ color: '#999', }}>{'mahesh patra'}</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15,backgroundColor:'green',paddingHorizontal:3,paddingVertical:2,textAlign:'center',width:80,borderRadius:10 }}>{item.status}</Text>
                           
                        </View>

                        <TouchableOpacity style={{ position: 'absolute', top: '40%', right: 15 }}>

                            <Ionicons name="chatbubble-ellipses" size={30} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{height:100,width:'100%',marginTop:10,}}>
                      <View style={{width:'92%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',alignSelf:'center'}}>
                        <Text>Time & Date</Text>
                        <Text style={{fontSize:16}}>Dec 12,2024 | 13:00-15:00 PM</Text>
                      </View>
                      <View style={{width:'92%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',alignSelf:'center'}}>
                        <Text>Location</Text>
                        <Text style={{fontSize:16}}>208 MG Road</Text>
                      </View>

                      <TouchableOpacity style={{height:40,backgroundColor:Colors.primary,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:10}}>
<Text style={{fontWeight:'bold',fontSize:15,color:'#fff',}}>View E-Recipt</Text>
                      </TouchableOpacity>
                    
                    </View>

                    </View>
                )
                }
                keyExtractor={(item) => item.id}

            />

    </View>
    
  )
}

export default orders

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
   
  }, itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#ccc',
    margin:7,
    flexDirection:'row'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '90%',
  },
  bookingId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookingDetails: {
    fontSize: 16,
    marginBottom: 3,
  },profileIcon: {

    // Pushes the profile icon to the left
  },
  search: {
    position: 'absolute', right: '18%'
    // Pushes the notification icon to the right
  },
  favicon: {
    position: 'absolute', right: '5%'
    // Pushes the notification icon to the right
  },
  header: {
    height: 59, alignItems: 'center', width: '100%', flexDirection: 'row', paddingHorizontal: 20,

  },
  container1: {
   
    paddingHorizontal: 0,
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
    
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    justifyContent:'center',
    alignItems:'center',
  
    width:'30%',
    borderBottomColor: '#ccc',
  },
  activeTab: {
    width:'30%',
    borderBottomWidth: 3,
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor: Colors.primary,
  },
  tabText: {
    color: '#555',
    fontSize:16
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize:16
  },
  bookingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})