import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import Colors from "../../constants/Colors";
import { useNavigation } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setFirstTime } from "../../store/slices/auth";

const orderDetails = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View style={{ height: 59, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center' }}>
                <FontAwesome
                    name="arrow-back"
                    size={24}
                    color="#999"
                />
                <FontAwesome
                    name="search"
                    size={24}
                    color="#999"
                />
            </View>




        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        marginHorizontal: 40,
        textAlign: "center",
        marginTop: 10,
    },
    dot: {
        backgroundColor: "#ccc",
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: Colors.light.tint,
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.light.tint, // Button background color
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white", // Button text color
        fontSize: 18,
        marginHorizontal: 10,
    },
});
export default orderDetails;
