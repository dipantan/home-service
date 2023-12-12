import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

import { AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

import { useNavigation,useRouter  } from "expo-router";
import Colors from "../../constants/Colors";
import Header from '../../components/Header';
const Bookmark = () => {
    const router = useRouter()
    const data = [
        { id: '1', name: 'Kylee Danforf', title: 'Washing Clothes', image: 'https://picsum.photos/300/200/?random' },
        { id: '2', name: 'Noke Danforf', title: 'Plumber thin', image: 'https://picsum.photos/300/200/?random' },
        { id: '3', name: 'Fazee Danforf', title: 'House Clenning', image: 'https://picsum.photos/300/200/?random' },
        { id: '4', name: 'Narun Danforf', title: 'Reparing things', image: 'https://picsum.photos/300/200/?random' },
        { id: '5', name: 'Alek Danforf', title: 'Bathroom Cleanning', image: 'https://picsum.photos/300/200/?random' },
        // Add more categories as needed
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header
                router={router}
                title={'My Bookmarks'} />
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ borderBottomWidth: 1, borderColor: '#ddd', paddingBottom: 20, marginBottom: 10 }}
                data={data}
                renderItem={({ item }) => (
                    <View style={{ width: '92%', flexDirection: 'row', alignSelf: 'center', margin: 7, backgroundColor: '#fff', padding: 10, elevation: 5, borderRadius: 10, }}>
                        <Image source={{ uri: item.image }} style={{ height: 120, width: 120, borderRadius: 15 }} />
                        <View style={{ marginLeft: 10, justifyContent: 'space-around' }}>
                            <Text style={{ color: '#999', }}>{item.name}</Text>
                            <Text style={{ color: '#555', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
                            <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 18 }}>$ 50</Text>
                            <Text style={{ fontSize: 12 }}><FontAwesome name='star-half-empty' size={15} color={'orange'} /> 4.7 | 6,186 reviews </Text>

                        </View>

                        <TouchableOpacity style={{ position: 'absolute', top: 12, right: 15 }}>

                            <Ionicons name="heart" size={30} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                )
                }
                keyExtractor={(item) => item.id}

            />



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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

export default Bookmark;
