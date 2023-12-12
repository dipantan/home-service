import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import React from "react";
import { logout } from "../../../store/slices/auth";
import { useDispatch } from "react-redux";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import Colors from "../../../constants/Colors";

const profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const settings = [
    { id: 1, title: 'Account', icon: 'person-outline', click: "user/accountsettings" },
    { id: 2, title: 'Notifications', icon: 'notifications-outline', click: "user/notificationsettings" },
    { id: 3, title: 'Privacy', icon: 'lock-closed-outline', click: "user/privacypolicy" },
    { id: 4, title: 'Security', icon: 'shield-checkmark-outline', click: "user/securitysettings" },
    { id: 6, title: 'Help & Support', icon: 'help-circle-outline', click: "user/helpsupport" },
    { id: 7, title: 'About', icon: 'information-circle-outline', click: "user/aboutus" },
    { id: 8, title: 'Terms & Conditions', icon: 'document-text-outline', click: "user/termsandcondition" },
    { id: 9, title: 'Sign Out', icon: 'log-out-outline' },
    // Add more settings as needed
  ];

  const renderSettings = () => {
    return settings.map((setting) => (
      <TouchableOpacity onPress={() => {
        if (setting.title === 'Sign Out') {

          Alert.alert(
            'Log out',
            'Are you sure you want to logout!',
            [
              {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
             },
             {
              text: 'OK',
              onPress: () => dispatch(logout("")),
            },
            ],
            { cancelable: true }
          );


        } else {
          router.push(setting.click)
        }

      }
      }


        key={setting.id} style={styles.settingItem}>
        <Ionicons name={setting.icon} size={25} color="#333" style={styles.settingIcon} />
        <Text style={styles.settingTitle}>{setting.title}</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="#aaa" />
      </TouchableOpacity>
    ));
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity>

          <Ionicons name="logo-electron" size={30} color={Colors.primary} />
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>

          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#555' }}>Profile</Text>
        </View>



        <TouchableOpacity style={styles.favicon}>

          <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={30} color="#333" />
        </TouchableOpacity>


      </View>
      <View style={styles.profileContainer}>

        <Image
          source={{ uri: 'https://picsum.photos/300/200/?random' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.useremali}>johndoe@gmail.com</Text>
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
  useremali: {
    fontSize: 16,
    fontWeight: 'bold',
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
});
