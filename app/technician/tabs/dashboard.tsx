import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/selectors";
import { User } from "../../../interfaces";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

const ts = Dimensions.get('window').width / 100
const dashboard = () => {

  const user: User = useSelector(getUser);

  const [activeTab, setActiveTab] = useState('Pending');

  const data = [
    { id: '1', title: 'Task 1', status: 'Pending' },
    { id: '2', title: 'Task 2', status: 'In Progress' },
    { id: '3', title: 'Task 3', status: 'Complete' },
    // Add more tasks with different statuses
  ];

  const renderTasks = (status) => {
    return (
      <FlatList
        data={data.filter((task) => task.status === status)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 59, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center' }}>
        <Text style={{ fontSize: 24 }}>My Orders</Text>
        <FontAwesome

          name="search"
          size={24}
          color="#999"
        />
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <TouchableOpacity style={[styles.tab, { borderColor: activeTab === 'Pending' ? Colors.light.tint : 'black' }]} onPress={() => setActiveTab('Pending')}>
          <Text style={[styles.tabText, { color: activeTab === 'Pending' ? Colors.light.tint : 'black' }]}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, { borderColor: activeTab === 'In Progress' ? Colors.light.tint : 'black' }]} onPress={() => setActiveTab('In Progress')}>
          <Text style={[styles.tabText, { color: activeTab === 'In Progress' ? Colors.light.tint : 'black' }]}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, { borderColor: activeTab === 'Complete' ? Colors.light.tint : 'black' }]} onPress={() => setActiveTab('Complete')}>
          <Text style={[styles.tabText, { color: activeTab === 'Complete' ? Colors.light.tint : 'black' }]}>Complete</Text>
        </TouchableOpacity>
      </View>

      <View style={{width:'80%',height:100,alignSelf:'center',marginTop:20,borderRadius:5,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#ccc'}}>
        <View style={{height:60,width:60,marginHorizontal:ts*5,backgroundColor:'#ddd'}}>


        </View>
        <View>
        <Text style={{fontSize:16,fontWeight:'bold'}}>Cleaning Service</Text>
        <Text>Order No : 65382</Text>
        <Text>Payment Mode : paytm</Text>

        </View>
       
      </View>





    </View>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  tab: {
    borderBottomWidth: 1, width: '25%', height: ts * 12, justifyContent: 'center', alignItems: 'center'
  },
  tabText: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 16
  }
});
