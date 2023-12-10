import { Button, StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from "react-native";
import React from "react";
import { logout } from "../../../store/slices/auth";
import { useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

const profile = () => {
  const dispatch = useDispatch();
  const settings = [
    { id: 1, title: 'Account', icon: 'person-outline' },
    { id: 2, title: 'Notifications', icon: 'notifications-outline' },
    { id: 3, title: 'Privacy', icon: 'lock-closed-outline' },
    { id: 4, title: 'Security', icon: 'shield-checkmark-outline' },
    { id: 5, title: 'Preferences', icon: 'settings-outline' },
    { id: 6, title: 'Help & Support', icon: 'help-circle-outline' },
    { id: 7, title: 'About', icon: 'information-circle-outline' },
    { id: 8, title: 'Terms & Conditions', icon: 'document-text-outline' },
    { id: 9, title: 'Sign Out', icon: 'log-out-outline' },
    // Add more settings as needed
  ];

  const renderSettings = () => {
    return settings.map((setting) => (
      <TouchableOpacity key={setting.id} style={styles.settingItem}>
        <Ionicons name={setting.icon} size={25} color="#333" style={styles.settingIcon} />
        <Text style={styles.settingTitle}>{setting.title}</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="#aaa" />
      </TouchableOpacity>
    ));
  };
  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.profileContainer}>
       
        <Image
          source={{ uri: 'https://picsum.photos/300/200/?random' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
      </View>
      <View style={styles.container}>{renderSettings()}</View>
    </ScrollView>
    
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  }, profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
