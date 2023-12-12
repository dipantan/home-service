import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation,useRouter  } from "expo-router";
import Header from '../../components/Header';
const Notification = () => {

    const router = useRouter()
    const notifications = [
        {
            id: 1,
            title: 'Notification 1',
            description: 'Description for Notification 1',
            image: require('../../assets/images/abc.jpg'), // Replace with your image path
        },
        {
            id: 2,
            title: 'Notification 2',
            description: 'Description for Notification 2',
            image: require('../../assets/images/abc.jpg'), // Replace with your image path
        },
        {
            id: 3,
            title: 'Notification 3',
            description: 'Description for Notification 3',
            image: require('../../assets/images/abc.jpg'), // Replace with your image path
        },
        {
            id: 4,
            title: 'Notification 4',
            description: 'Description for Notification 4',
            image: require('../../assets/images/abc.jpg'), // Replace with your image path
        },
    ];

    return (
        <View style={{ flex: 1 }}>
           
            <Header
            
             title={'Notifications'}/>

            <View style={styles.container}>
                {/* Header */}

                {/* Notifications */}
                {notifications.map(notification => (
                    <View key={notification.id} style={styles.notificationContainer}>
                        <Image source={notification.image} style={styles.notificationImage} />
                        <View style={styles.notificationText}>
                            <Text style={styles.notificationTitle}>{notification.title}</Text>
                            <Text>{notification.description}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    notificationImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 10,
    },
    notificationText: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Notification;
