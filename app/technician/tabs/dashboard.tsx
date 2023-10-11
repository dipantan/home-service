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

  const data = ['Pending', 'In Progress', 'Complete'];



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


      <View>
        <FlatList
          data={data}
          horizontal={true}
          
          style={{ alignSelf: 'center',marginBottom:20  }}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.tabt, { borderColor: activeTab === item ? Colors.light.tint : 'black' }]} onPress={() => setActiveTab(item)}>
              <Text style={[styles.tabText, { color: activeTab === item ? Colors.light.tint : 'black' }]}>{item}</Text>
            </TouchableOpacity>
          )}
        />

      </View>




      <View style={{ width: '80%', height: 100, alignSelf: 'center', borderRadius: 5, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc' }}>
        <View style={{ height: 60, width: 60, marginHorizontal: ts * 5, backgroundColor: '#ddd' }}>


        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Cleaning Service</Text>
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
    borderBottomWidth: 1, width: '30%', height: ts * 12, justifyContent: 'center', alignItems: 'center'
  },
  tabText: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 16
  },
  tabt: {
    borderBottomWidth: 1, width: ts * 28, height: ts * 12, justifyContent: 'center', alignItems: 'center'
  }
});
