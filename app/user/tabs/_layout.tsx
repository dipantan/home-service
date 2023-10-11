import React from "react";
import { Tabs } from "expo-router";

const home = () => {
  return (
    <Tabs
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
      }}
    >
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="orders" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default home;
