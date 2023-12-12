import React from "react";
import { Tabs } from "expo-router";
import { AntDesign,Feather } from '@expo/vector-icons'; 
const home = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
      }}
    >
      <Tabs.Screen name="home" 
       options={{ tabBarLabel: "Home", tabBarIcon: ({color}) => <AntDesign size={22} color={color} name="home" />, }} />
      <Tabs.Screen name="booking" options={{ tabBarLabel: "Booking", tabBarIcon: ({color}) => <Feather size={22} color={color} name="book" />, }} /> 
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile", tabBarIcon: ({color}) => <Feather size={22} color={color} name="user" />, }} />
    </Tabs>
  );
};

export default home;
